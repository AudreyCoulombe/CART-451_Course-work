let natural = require("natural");
let fs = require("fs");

let countTreshold = 2;
let tfidfTreshold = 0;


/********************************************* WARSAN SHIRE'S WORD COUNT *****************************************/
/*(For each word in WARSAN SHIRE's texts, check how many times it was used and store the most used in an array)*/

// Access wordCount.js file
const WordCount = require("./wordCount");
// Create a new instance of WordCount class (from wordCount.js)
let shireWordCount = new WordCount();
// Look at Warsan Shire's poems in files folder
let warsanShirePoems = fs.readFileSync("files/WarsanShireTexts.txt", "utf8");
shireWordCount.process(warsanShirePoems);
shireWordCount.sortByCount();
// shireWordCount.logTheDict();

// For each word with a count higher than *countTreshold*, create an object with the word and its count and push it in an array
let shireFrequentWords = [];
for (let i = 0; i < shireWordCount.keys.length; i++) {
  if (shireWordCount.dict[shireWordCount.keys[i]] > countTreshold) {
    let wordObj = {
      word: shireWordCount.keys[i],
      count_in_Shires_poems: shireWordCount.dict[shireWordCount.keys[i]],
    };
    shireFrequentWords.push(wordObj);
  }
}

/********************************************* TF-IDF ****************************************/
/*(Compare word frequency in Warasan Shire's texts with word frequency in other texts.  )*/

// Access TFIDF.js file
const TFIDF = require("./TFIDF");
// Create a new instance of TFIDF class (from TFIDF.js)
let tfIDF = new TFIDF();

// Files for word frequency comparison
let filenames = [
  "WarsanShireTexts.txt",

  "RichardSiken.txt",
  "ShermanAlexie.txt",
  "WendellBerry.txt",
  "WilliamButlerYeats.txt",
  "JamesLongenbach.txt",
  "JosueGuebo.txt",
  "RonRash.txt",

  // "fish.txt",
  // "rainbow.txt",
  // "cat.txt",
  // "phadke.txt",
  // "eclipse.txt",
  // "sports.txt",
  // "test.txt",
  // "tree.txt",
];

// For all terms in all files, calculate term frequency
for (let i = 0; i < filenames.length; i++) {
  // getTermFreq(filenames[i]);
  let data = fs.readFileSync("files/" + filenames[i], "utf8");
  tfIDF.termFreq(data);
}

// For all terms, get the number of files in which it appears
for (let i = 0; i < filenames.length; i++) {
  // getDocFreq(filenames[i]);
  let data = fs.readFileSync("files/" + filenames[i], "utf8");
  tfIDF.docFreq(data);
}

tfIDF.finish(filenames.length);
tfIDF.sortByScore();
//   tfIDF.logTheDict();

// Look for Warsan Shire's most frequent words in tfIDF.keys array and when it is found, 
// For all words in in all files...
for (let i = 0; i < tfIDF.keys.length; i++) {
  // For all words in shireFrequentWords array...
  for (let j = 0; j < shireFrequentWords.length; j++) {
    // If the word in shireFrequentWords array is the same as the word in tfIDF
    if (tfIDF.dict[tfIDF.keys[i]].word == shireFrequentWords[j].word) {
      // Assign docCount and tfidf values to it
      Object.assign(shireFrequentWords[j], {
        count_in_all_docs: tfIDF.dict[tfIDF.keys[i]].count,
        docs_with_it: tfIDF.dict[tfIDF.keys[i]].docCount,
        tfidf: tfIDF.dict[tfIDF.keys[i]].tfidf,
      });
      // console.log(shireFrequentWords[j]);
      // If the tfidf value of the word is above the treshold...
      if (tfIDF.dict[tfIDF.keys[i]].tfidf > tfidfTreshold) {
        // console.log("*********************ABOVE TRESHOLD!!!!!")
        console.log(shireFrequentWords[j]);
      }
    }
  }
}
