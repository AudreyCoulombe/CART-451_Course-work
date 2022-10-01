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
app.use('/varsToMongo', handleGetVars);

//get url from .env file
const url = process.env.MONGODB_URI;
console.log(url);

//Access data model (DBSchema.js)
const fitBitModel = require("./DBSchema.js");



//connect to database
mongoose.connect(url);
let db = mongoose.connection;
db.once("open", async function () {
  console.log("connecting to DB");

  // Below: Requires to set values as string in DBSchema.js
    // fitBitModel.findOne({TotalSteps:"13162"}).then((result)=>{ // Find only one document with value 13162 for the key "TotalSteps"
    // fitBitModel.find({TotalSteps:"15355", Calories:"2013"}).then((result)=>{ // Find document with value "15355" for the key "TotalSteps" and value "2013" for "Calories"
    // fitBitModel.find({TotalSteps:"13162"}).then((result)=>{ // Find all documents with value 13162 for the key "TotalSteps"
    //   console.log(result);
    // })

  // Below: Requires to set values as Numbers in DBSchema.js
    // To convert/update each field in the collection to be from a string to an integer or decimal (float/double). (NOTE: only because my values in my db are written as a string and I are labeled as Numbers in DBSchema.js)
    let trackerDistanceToNumber = await fitBitModel.updateMany({/*Filter documents.Keep empty for all documents*/}, [{ $set: { "TrackerDistance": { $toDouble: "$TrackerDistance" } } }], { multi: true });
    let caloriesToNumber = await fitBitModel.updateMany({/*Filter documents.Keep empty for all documents*/}, [{ $set: { "Calories": { $toDouble: "$Calories" } } }], { multi: true });
    // fitBitModel.find({ TrackerDistance: 9.80000019073486 }).then((result) => { // Find all documents with value 13162 for the key "TotalSteps"
    // fitBitModel.find({TrackerDistance:{$gte: 25}}).then((result)=>{ // Find document with value greater than or equal to ($gte) 25 for the key "TrackerDistance"
    // fitBitModel.find({Calories:{$gte: 10}, TrackerDistance:{$gte: 25}}).then((result)=>{ // Find document with value greater than or equal to ($gte) 10 for the key "Calories" + greater than or equal to 25 for the key "TrackerDistance"
    fitBitModel.find({Calories:{$gte: 10}, TrackerDistance:{$gte: 25}},'TotalSteps TrackerDistance Calories').then((result)=>{ // print only TotalSteps, TrackerDistance and Calories
      console.log(result); // Note: output result = array, so you can work with it as you work with arrays
    })

    // Count the number of documents that have a TrackerDistance greater than or equal to 25
    let docCount = await fitBitModel.countDocuments({TrackerDistance:{$gte: 25}}); // Note: await is needed to add a delay, or else it will look for it too quickly and won't find it
    console.log(docCount);
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
app.post('/postForm', handlePost);

// the callback= log the results
function handlePost(request, response) {
  console.log(request.body);
  response.send("SUCCESS POST");
}

//EXAMPLE of  user making a query ... 10
async function handleGetVars(request, response, next) {
  console.log(request.url);
  console.log(request.query.paramOne);
  response.send("SUCCESS GET");
}

