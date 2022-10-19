const express = require("express");

const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/fuzzifyVars',handleGetVars);

// make server listen for incoming messages
server.listen(portNumber, function () {
    console.log("listening on port:: " + portNumber);
  });
  // create a server (using the Express framework object)
  app.use(express.static(__dirname + "/public"));
  app.use("/fuzzyClient", fuzzyRoute);
  
  //default route
  app.get("/", function (req, res) {
    res.send("<h1>Hello world</h1>");
  });
  
  function fuzzyRoute(req, res, next) {
    res.sendFile(__dirname + "/public/fuzzyClient.html");
  }

//   //EXAMPLE of  user making a query ... 
async function  handleGetVars  (request,response,next){
    console.log(request.url);
    console.log(request.query.paramService);
    console.log(request.query.paramFood);
    let ratings =  {service:parseInt(request.query.paramService),food: parseInt(request.query.paramFood)}

    response.send({"tip": "nothing yet"});
 }

