// const portNumber = 4200;
// const app = express(); //make an instance of express
// const server = require("http").createServer(app);
// Pulling our concordance object from a separate "module" - concordance.js
let WordCount= require('./wordCount');

// make server listen for incoming messages
// server.listen(portNumber, function () {
//     console.log("listening on port:: " + portNumber);
//   });

// app.use(express.static('public'));
let fs = require('fs');

// And we'll look at all files in the jane austen directory
let file = fs.readFileSync('files/cat.txt', 'utf8');
//console.log(file);




// An object that acts as dictionary of words and counts
let wordCount = new WordCount();
wordCount.process(file);
wordCount.sortByCount();
wordCount.logTheDict();