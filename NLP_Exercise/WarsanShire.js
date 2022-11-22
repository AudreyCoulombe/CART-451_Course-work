let natural = require("natural");
let fs = require("fs");

let countTreshold = 4;
let tfidfTreshold = 0;

/********************************************* WARSAN SHIRE'S WORD COUNT *****************************************/
/*(For each word in WARSAN SHIRE's texts, check how many times it was used and store the most used in an array)*/

// Access wordCount.js file
const WordCount = require("./wordCount");
// Create a new instance of WordCount class (from wordCount.js)
let shireWordCount = new WordCount();
// Look at Warsan Shire's poems in files folder
let warsanShirePoems = fs.readFileSync("files/WarsanShireTexts.txt", "utf8");
// let warsanShirePoems = fs.readFileSync("files/WarsanShireTexts_test.txt", "utf8");
shireWordCount.process(warsanShirePoems);
shireWordCount.sortByCount();
// shireWordCount.logTheDict();

// For each word with a count higher than *countTreshold*, create an object with the word and its count and push it in an array
shireFrequentWords = [];
for (let i = 0; i < shireWordCount.keys.length; i++) {
  let wordStem = natural.PorterStemmer.stem(shireWordCount.keys[i]);
  let wordPOS = getPOS(shireWordCount.keys[i]);
  if (shireWordCount.dict[shireWordCount.keys[i]] > countTreshold) {
    let wordObj = {
      word: shireWordCount.keys[i],
      stem: wordStem,
      POS: getPOS(shireWordCount.keys[i]),
      count_in_Shires_poems: shireWordCount.dict[shireWordCount.keys[i]],
    };
    if (wordObj.POS == "NN" || wordObj.POS == "JJ"){ 
      shireFrequentWords.push(wordObj);
    }
  }
}
// for (let i = 0; i<shireFrequentWords.length; i++){
//   console.log(shireFrequentWords[i]);
// }

let frequentStems = [];
let firstStem = {
  stem: shireFrequentWords[0].stem,
  words: [shireFrequentWords[0].word],
}
frequentStems.push(firstStem);

// For each word in shireFrequentWords, run checkIfUniqueStem fct
shireFrequentWords.forEach(checkIfUniqueStem);
// create an array of unique stem for shireFrequentWords
function checkIfUniqueStem(item,index) {
  let wordIndex = 0;
  let sameStemFound = "false";
  
  while(sameStemFound == "false" && wordIndex < frequentStems.length) {
    if (item.stem == frequentStems[wordIndex].stem) {
      sameStemFound = "true";
      // console.log("same stem found!!")
      frequentStems[wordIndex].words.push(item.word);
      // console.log("ADDING NEW WORD TO AN ALREADY EXISTING STEM");
    }
      wordIndex++;
  }

  if (frequentStems.length >= wordIndex && sameStemFound == "false") {
        // create a new object with the new stem and push it in the frequentStems array
          let uniqueStem = {
            stem: item.stem,
            words: [item.word],
          }
          frequentStems.push(uniqueStem);
          // console.log("ADDING NEW STEM IN ARRAY");
      }
}

// console.log(frequentStems);

/********************************************* TF-IDF ****************************************/
/*(Compare word frequency in Warasan Shire's texts with word frequency in other texts.  )*/

// Access TFIDF.js file
const TFIDF = require("./TFIDF");
const { DefaultDeserializer } = require("v8");
// Create a new instance of TFIDF class (from TFIDF.js)
let tfIDF = new TFIDF();

// Files for word frequency comparison
let filenames = [
  "WarsanShireTexts.txt",

  // "RichardSiken.txt",
  // "ShermanAlexie.txt",
  // "WendellBerry.txt",
  // "WilliamButlerYeats.txt",
  // "JamesLongenbach.txt",
  // "JosueGuebo.txt",
  // "RonRash.txt",

  "fish.txt",
  "rainbow.txt",
  "cat.txt",
  "phadke.txt",
  "eclipse.txt",
  "sports.txt",
  "test.txt",
  "tree.txt",
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



// // Look for Warsan Shire's most frequent words in tfIDF.keys array and when it is found, add count (in all docs), number of documents with the word and tfidf keys and values in the object
// For all words in in all files...
for (let i = 0; i < tfIDF.keys.length; i++) {
  // For all words in shireFrequentWords array...
  for (let j = 0; j < shireFrequentWords.length; j++) {
    // If the word in shireFrequentWords array is the same as the word in tfIDF
    if (tfIDF.dict[tfIDF.keys[i]].word == shireFrequentWords[j].word) {
      // If the tfidf value of the word is above the treshold...
        // Assign docCount and tfidf values to it
        Object.assign(shireFrequentWords[j], {
          count_in_all_docs: tfIDF.dict[tfIDF.keys[i]].count,
          docs_with_it: tfIDF.dict[tfIDF.keys[i]].docCount,
          tfidf: tfIDF.dict[tfIDF.keys[i]].tfidf,
        }); 
        console.log(shireFrequentWords[j]);
    }
  }
}


// For "parts of speech": http://naturalnode.github.io/natural/brill_pos_tagger.html
// To know if DT (determinant), VB (verb), NN (noun), etc.
function getPOS(word) {
  const language = "EN"
  const defaultCategory = 'N';
  const defaultCategoryCapitalized = 'NNP';

  var lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
  var ruleSet = new natural.RuleSet('EN');
  var tagger = new natural.BrillPOSTagger(lexicon, ruleSet);

  return tagger.tag(tokenizeWord(word)).taggedWords[0].tag;
  
}


// Reference: http://naturalnode.github.io/natural/Tokenizers.html
function tokenizeWord(word) {
  let tokenizer = new natural.WordTokenizer();
  let token = tokenizer.tokenize(word); //here, could be reading from txt file

  return token;
}



