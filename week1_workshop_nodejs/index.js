let express = require('express');
const portNumber = 4200;
const app = express();

app.get('/', requestHandler);
app.use('/banana.html',errorRoute);
app.use(express.static(__dirname + '/public'));
//fwd the requests.... (using a filter)
app.use('/veg',vegRoutes);
app.use('/fruit',fruitRoutes);
app.use('/banana',bananaRoute);


function requestHandler(request,response){
  // send a default response to the client...
  response.send("HELLO WORLD");
   console.log(request); //built in
    console.log(response); //built  in
  console.log(request.url);
}

function fruitRoutes(req, res, next){
    // req is the Node.js http request object
   // res is the Node.js http response object
   // next is a function to call to invoke the next middleware
   console.log("IN FRUIT FUNCTION ");
   console.log(req);
  res.send("WE ARE HERE FRUIT ROUTE");
}
function vegRoutes(req, res, next){
 // req is the Node.js http request object
 // res is the Node.js http response object
 // next is a function to call to invoke the next middleware
 console.log("IN VEG FUNCTION ");
 console.log(req);
 console.log(req.url);
 res.send("WE ARE HERE VEG ROUTE");
}

function bananaRoute(req, res, next){
  res.sendFile(__dirname + '/public/banana.html');
}

//new error route:
function errorRoute(req, res, next){
 const error = new Error('Not valid url');
  res.send(error.message);
}

app.listen(portNumber, function () {
    console.log("Server is running on port "+portNumber);
});