// go to http://localhost:4200/client

const express = require("express");

const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/varsToMongo',handleGetVars);

//2A
//https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
//1A
//https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/
require("dotenv").config();

/** 1B for the mongo connection */
const url = process.env.MONGODB_URI;

//you must connect to yyour generated mongoose model
const AirBNBCustomEntry= require("./db_config/customAirBNBEntry.js");

const jsonData = require('./files/firstTwoHundered.json');



//NEW 
const WordCount =  require ('./wordCount');
let wc = new WordCount();


//2B
mongoose.connect(url);
let db = mongoose.connection;

//STEP ONE:: need to save the data from json file to the db

//2C
db.once("open", async function () {
//STEP 1::: DO THIS ONCE :) 
    //read the json ... 
//console.log(jsonData);

// save each entry to the database. DO IT ONLY ONCE!
// for(let i = 0; i< jsonData.length; i++){
//     const newE = new AirBNBCustomEntry(jsonData[i]);
//     await newE.save();
//     console.log(i);
// }

//1 find (>1)
let regeMaria = /Maria/; // regular expression. see regularExpressionsTest.js
let regexChoice = /(Emma|Michelle|Miranda)/; // find either emma, or michelle, or miranda
let regexP = /\bp(\w)+/i; // b means boundary (start or end). returns Paul as first one

AirBNBCustomEntry.find({ host_name: regexChoice}).then((result) => {
//AirBNBCustomEntry.find({ host_name: regexMaria}).then((result) => {
// AirBNBCustomEntry.find({ host_name: "santiago" }).then((result) => {
  // below goes with wordCount.js file 
   console.log(result);

   result.forEach((res)=>{
    if (res.house_rules !== null) {
      wc.process(res.house_rules);
    }
   })
   
  //  wc.process(result.house_rules);
   wc.logTheDict();
  })

})


// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
});
// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));
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
 
// the callback
function handlePost(request,response){
  console.log(request.body);
  //now we want to save the data in the db

  const entry  = new AirBNBCustomEntry({
    host_name:request.body.host_name,
    neighbourhood_group:request.body.nbgn_grp,
     house_rules:request.body.house_rules
  });
  //save to db
  entry.save().then((result) => {
    response.json(result);
  });

}

//EXAMPLE of  user making a query ... 10
async function  handleGetVars  (request,response,next){
  console.log(request.url);
  console.log(request.query.paramOne);
  //let results = await AirBNBCustomEntry.find({host_name: request.query.paramOne});
  //console.log(results [0]);
 // response.send(results);
}

