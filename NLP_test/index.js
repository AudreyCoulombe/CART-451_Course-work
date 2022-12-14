//run this in terminal and go to http://localhost:4200/clientSentiment
//note: according to meaning of sentence input, I will have a score indicating how positive (happy, fun, etc.) my sentence is

//import the Express library
let express = require('express');
const portNumber =4200;
let app = express(); //make an insatnce of express
let httpServer = require('http').createServer(app);  // create a server (using the Express framework object)
// serving static files
let static = require('node-static'); // for serving static files (i.e. css,js,html...) 

// "body parser" is need to deal with post requests
let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const CustomSentiModule = require('./CustomSentiModule');
let customSentiModInstance = new CustomSentiModule();

//default route
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

/// use this VERB for getting posted data...
app.post('/getSentiment',handlePost);
 
// the callback
function handlePost(request,response){
  console.log(request.body.clientPhrase);
  let reply = customSentiModInstance.runAnalysis(request.body.clientPhrase);
 //NOTE: we are also adding in the original sentence
  reply.clientSentence=request.body.clientPhrase;
  console.log(reply);
  response.send(reply);
}
 
// make server listen for incoming messages
httpServer.listen(portNumber, function(){
  console.log('listening on port:: '+portNumber);
})


// serve anything from this dir ...
app.use(express.static(__dirname + '/public'));
 
//make a route to sentiment page...
app.get('/clientSentiment', function(req, res) {
    res.sendFile(__dirname + '/public/clientSentiment.html');
});