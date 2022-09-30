//run server (node server.js) and go to http://localhost:4200/client

// contants to create an express server
const express = require("express");
const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);
require("dotenv").config();
const mongoose = require("mongoose");

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/varsToMongo',handleGetVars);

//get url from .env file
const url = process.env.MONGODB_URI;
console.log(url);

//Access data model (DBSchema.js)
const fitBitModel = require("./DBSchema.js");

//connect to database
mongoose.connect(url);
let db = mongoose.connection;
db.once("open", async function(){
  console.log("connecting to DB");
  // fitBitDataModel.find({TotalSteps:"13162"}).then((result)=>{
  fitBitDataModel.find({TotalSteps:13162}).then((result)=>{
    console.log(result);
  })
});


// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
});
// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));
// make client route
app.use("/client", clientRoute);
//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function clientRoute(req, res, next) {
  res.sendFile(__dirname + "/public/client.html");
}

/// use this VERB for getting posted data... 9
app.post('/postForm',handlePost);
 
// the callback= log the results
function handlePost(request,response){
  console.log(request.body);
  response.send("SUCCESS POST");
}

//EXAMPLE of  user making a query ... 10
async function  handleGetVars  (request,response,next){
  console.log(request.url);
  console.log(request.query.paramOne);
  response.send("SUCCESS GET");
}

