let natural = require("natural");
let fs = require("fs");
let tfidfTreshold = 0.01;

/****************************** Word count ***********************************/
// Display all words and the number of times they were used + sort the words from the most used to the least used
// Access wordCount.js file
let WordCount = require("./wordCount");
// Look at shakespeare's sonnets in files folder
let shakespeareSonnets = fs.readFileSync(
  "files/shakespeare_sampleTest.txt",
  "utf8"
);

// Use the wordCount module (from wordCount.js) to create an object that acts as dictionary of words and counts
let wordCount = new WordCount();
wordCount.process(shakespeareSonnets);
wordCount.sortByCount();
// wordCount.logTheDict();

// console.log(wordCount);
// console.log(wordCount.keys);
// console.log(wordCount.keys[i] + ': ' + wordCount.dict[wordCount.keys[i]]);

// Put all words with a count higher than 3 in an array 
let frequentWords = [];
for (let i = 0; i < wordCount.keys.length; i++) {
  if (wordCount.dict[wordCount.keys[i]] > 1) {
    let wordObj = {
        word: wordCount.keys[i],
        count: wordCount.dict[wordCount.keys[i]],
    }
    frequentWords.push(wordObj);
    // frequentWords.push(wordCount.keys[i]);
  }
}
// console.log(frequentWords);

/****************************** TF-IDF ***********************************/
// Access TFIDF.js file
const TFIDF = require("./TFIDF");
// create a new instance of TFIDF module
let tfIDF = new TFIDF();

loadSamples();

function loadSamples() {
  // Files for word frequency comparison
  let filenames = [
    // "What_We_Have.txt",
    "shakespeare_sampleTest.txt", // need to include analysed text
    "shakespeare_comparisonTest.txt",
    "Home.txt",
    // "Backwards.txt",
    // "The_House.txt",
    // "Ugly.txt",
    // "Midnight_in_the_Foreign_Food_Aisle.txt",
    // "Our_Blue_Bodies.txt",
    // "Nail_Technician_as_Palm_Reader.txt",
    // "Her_Blue_Body_Full_of_Light.txt",
    // "Souvenir.txt",
    // "The_Ugly_Daughter.txt",
    // "Conversations_About_Home.txt",
    // "The_Unbearable_Weight_of_Staying.txt",
    // "Dear_Moon.txt",
    // "How_to_Wear_your_Mothers_Lipstick.txt",
    // "Trying_to_Swim_With_God.txt",
    // "For_Women_Who_Are_Difficult_to_Love.txt",
    // "Fire.txt",

    // "fish.txt",
    // "rainbow.txt",
    // "cat.txt",
    // "phadke.txt",
    // "eclipse.txt",
    // "sports.txt",
    // "test.txt",
    // "tree.txt"
  ];

  for (let i = 0; i < filenames.length; i++) {
    getTermFreq(filenames[i]);
  }

  for (let i = 0; i < filenames.length; i++) {
    getDocFreq(filenames[i]);
  }

  tfIDF.finish(filenames.length);
  tfIDF.sortByScore();
//   tfIDF.logTheDict();
}

function getDocFreq(filename) {
  let data = fs.readFileSync("files/" + filename, "utf8");
  tfIDF.docFreq(data);
}

function getTermFreq(filename) {
  let data = fs.readFileSync("files/" + filename, "utf8");
  tfIDF.termFreq(data);
}


for (let i = 0; i < tfIDF.keys.length; i++) {
    for (let j = 0; j < frequentWords.length; j++) {
        if (tfIDF.dict[tfIDF.keys[i]].word == frequentWords[j].word) {
            console.log("**************************WE HAVE AN EQUALITY************************");
            Object.assign(frequentWords[j], {
                docCount: tfIDF.dict[tfIDF.keys[i]].docCount,
                tfidf: tfIDF.dict[tfIDF.keys[i]].tfidf
            });
            console.log(frequentWords[j]);
            
            if (tfIDF.dict[tfIDF.keys[i]].tfidf > tfidfTreshold) {
                console.log(frequentWords[j] + ": tfidf = " + tfIDF.dict[tfIDF.keys[i]].tfidf);
            }
        }
    }
}
// console.log(frequentWords[0]);