
//DALLE
let isValidURL = require("./utils.js");
let backendAPI = require("./backend_api.js");

//import the Express library
let express = require('express');
const portNumber =4200;
let app = express(); //make an insatnce of express
let httpServer = require('http').createServer(app);  // create a server (using the Express framework object)


let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
 
//default route
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
 
// make server listen for incoming messages
httpServer.listen(portNumber, function(){
  console.log('listening on port:: '+portNumber);
})

// serving static files
let static = require('node-static'); // for serving static files (i.e. css,js,html...)
// serve anything from this dir ...
app.use(express.static(__dirname + '/public'));
 
//make a route to sentiment page...
app.get('/testDalle', function(req, res) {
    res.sendFile(__dirname + '/public/testDalle.html');
});

/// use this VERB for getting posted data...
app.post('/getDalleRequest',handlePost);
 
// the callback
function handlePost(request,response){
  console.log(request.body.clientSearch);

  let promptText = request.body.clientSearch;

  // let newBackendUrl = "http://test.com";
  //AUDREY PUT YOUR BACKEND URL HERE 
  let newBackendUrl= "https://emotional-eq-lip-budgets.trycloudflare.com";
  // let newBackendUrl= "https://commentary-reef-economics-closely.trycloudflare.com";
  let imagesPerQuery = 1;

  //1: check if the url to backend is valid
  if(isValidURL(newBackendUrl)){
    console.log("test");

    //2: is it avlid backend url for DALL-E (i.e. is backnd server running?)
    backendAPI.checkIfValidBackend(newBackendUrl).then((isValid) => {

      if (isValid) {
       // setBackendValidUrl(newBackendUrl)
       //valid backendURL
       console.log("valid url for DALL-E");


    // 3: make a fetch request :)
  backendAPI.callDalleService(newBackendUrl, promptText, imagesPerQuery)
  .then((responseFromDALLe) => {
    //get back an object with generated images.
    console.log("execution time: "+ responseFromDALLe.executionTime);
    let imagesBackFromDalleArray = responseFromDALLe.serverResponse.generatedImgs;
    let generatedImagesFormat = responseFromDALLe.serverResponse.generatedImgsFormat;
     //console.log(imagesBackFromDalleArray);

     let arrayToSendToClient = [];
     for(let i =0; i< imagesBackFromDalleArray.length; i++){

      arrayToSendToClient.push(
      {
        imgSrc:`data:image/${generatedImagesFormat};base64,${imagesBackFromDalleArray[i]}`,
        title: "Download image",
        downloadedFilename:`${promptText}_.${generatedImagesFormat}`
     });

    
     }
     console.log(arrayToSendToClient);
     response.send(arrayToSendToClient);
    
    })

    
    }
    else{
      console.log("not a backendURL");
     // response.send("nothing");
    }

    })
  }
 //just not a valid url in general...
  //response.send("nothing");
}