let natural = require("natural");
let fs = require("fs");

let countTreshold = 4;

/********************************************* WARSAN SHIRE'S WORD COUNT *****************************************/
/*(For each word in WARSAN SHIRE's texts, check how many times it was used and store the most used in an array)*/

// Access wordCount.js file and create a new instance of WordCount class (from wordCount.js)
const WordCount = require("./wordCount");
let shireWordCount = new WordCount();

// Look at Warsan Shire's poems in files folder
let warsanShirePoems = fs.readFileSync("files/WarsanShireTexts.txt", "utf8");

shireWordCount.process(warsanShirePoems);
shireWordCount.sortByCount();
// shireWordCount.logTheDict();

// For each word with a count higher than *countTreshold*, create an object with the word, its stm, its POS and its count and push it in an array
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
    // Only keep nouns and adjectives
    if (wordObj.POS == "NN" || wordObj.POS == "JJ"){ 
      shireFrequentWords.push(wordObj);
    }
  }
}

/********************************************* WARSAN SHIRE'S WORDS STEMS *****************************************/
// array containing all unique word stems from shireFrequentWords array
let frequentStems = [];

// create an object for the first stem and push it in the array
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
  // Check if the word<s stem is already in the frequentStem array
  while(sameStemFound == "false" && wordIndex < frequentStems.length) {
    // if it<s already in the frequentStem array set variable as "true"
    if (item.stem == frequentStems[wordIndex].stem) {
      sameStemFound = "true";
      // add the word linked to the stem in the word array for the stem object
      frequentStems[wordIndex].words.push(item.word);
    }
      // increase wordIndex
      wordIndex++;
  }

  // if we are done looking at all the stems in frequentStems array and we have not found a corresponding stem...
  if (frequentStems.length >= wordIndex && sameStemFound == "false") {
        // create a new object with the new stem and push it in the frequentStems array
          let uniqueStem = {
            stem: item.stem,
            words: [item.word],
          }
          frequentStems.push(uniqueStem);
      }
}
// console.log(frequentStems);

/************************************************* TF-IDF **************************************************/
/*(Compare word frequency in Warasan Shire's texts with word frequency in other texts.  )*/

// Access TFIDF.js file
const TFIDF = require("./TFIDF");
const { DefaultDeserializer } = require("v8");
// Create a new instance of TFIDF class (from TFIDF.js)
let tfIDF = new TFIDF();

// Files for word frequency comparison
let filenames = [
  "WarsanShireTexts.txt",
  // Male poets texts:
    "RichardSiken.txt",
    "ShermanAlexie.txt",
    "WendellBerry.txt",
    "WilliamButlerYeats.txt",
    "JamesLongenbach.txt",
    "JosueGuebo.txt",
    "RonRash.txt",
  // Other random texts:
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
  let data = fs.readFileSync("files/" + filenames[i], "utf8");
  tfIDF.termFreq(data);
}

// For all terms, get the number of files in which it appears
for (let i = 0; i < filenames.length; i++) {
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
    // If the word in shireFrequentWords array is the same as the word in tfIDF...
    if (tfIDF.dict[tfIDF.keys[i]].word == shireFrequentWords[j].word) {
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


/************************************************* POS **************************************************/
// Function returning the word<s "part of speech"
function getPOS(word) {
  const language = "EN"
  const defaultCategory = 'N';
  const defaultCategoryCapitalized = 'NNP';

  var lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
  var ruleSet = new natural.RuleSet('EN');
  var tagger = new natural.BrillPOSTagger(lexicon, ruleSet);

  return tagger.tag(tokenizeWord(word)).taggedWords[0].tag;
}


/************************************************* TOKENIZE **************************************************/
// function returning the tokenized word
function tokenizeWord(word) {
  let tokenizer = new natural.WordTokenizer();
  let token = tokenizer.tokenize(word); //here, could be reading from txt file

  return token;
}