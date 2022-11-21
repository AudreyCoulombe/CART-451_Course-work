/* To do:
  - Ask Sabine what tokenize can be used for in this context

*/


let natural = require("natural");
let fs = require("fs");

let countTreshold = 0;
let tfidfTreshold = 0;


/********************************************* WARSAN SHIRE'S WORD COUNT *****************************************/
/*(For each word in WARSAN SHIRE's texts, check how many times it was used and store the most used in an array)*/

// Access wordCount.js file
const WordCount = require("./wordCount");
// Create a new instance of WordCount class (from wordCount.js)
let shireWordCount = new WordCount();
// Look at Warsan Shire's poems in files folder
// let warsanShirePoems = fs.readFileSync("files/WarsanShireTexts.txt", "utf8");
let warsanShirePoems = fs.readFileSync("files/WarsanShireTexts_test.txt", "utf8");
shireWordCount.process(warsanShirePoems);
shireWordCount.sortByCount();
// shireWordCount.logTheDict();

// For each word with a count higher than *countTreshold*, create an object with the word and its count and push it in an array
let shireFrequentWords = [];
for (let i = 0; i < shireWordCount.keys.length; i++) {
 
  let wordStem = natural.PorterStemmer.stem(shireWordCount.keys[i]);
  
  if (shireWordCount.dict[shireWordCount.keys[i]] > countTreshold) {
    let wordObj = {
      word: shireWordCount.keys[i],
      stem: wordStem,
      POS: getPOS(shireWordCount.keys[i]),
      count_in_Shires_poems: shireWordCount.dict[shireWordCount.keys[i]],
    };
    shireFrequentWords.push(wordObj);
    // console.log(wordObj);
  }
}
// console.log(shireFrequentWords);


let frequentStems = [];
let uniqueStem = {
  stem: shireFrequentWords[0].stem,
  words: [shireFrequentWords[0].word],
}
frequentStems.push(uniqueStem);
//for each frequent words in Warsan Shire<s texts...
// for (let i = 0; i < shireFrequentWords.length; i++) {
//     // look for each element in frequentStem array
    
// }
shireFrequentWords.forEach(checkIfUniqueStem);

function checkIfUniqueStem(item,index) {
  frequentStems.forEach(function(stemItem,stemIndex){
     // if the stem of the word in shireFrequentWords is NOT THE SAME as the stem in frequentStem...
     if (item.stem != frequentStems[stemIndex].stem) {
      // create a new object with the new stem and push it in the frequentStems array
      let uniqueStem = {
        stem: item.stem,
        words: [item.word],
      }
      frequentStems.push(uniqueStem);
    } 
    // if the stem of the word in shireFrequentWords IS THE SAME as the stem in frequentStem...
    else if (item.stem == frequentStems[stemIndex].stem) {
      // console.log("ALREADY A STEM: " + item.stem);
      // // add the original word in the word list associated with the stem
      // frequentStems[stemIndex].words.push(item.word);
    }
  })
  
}

console.log(frequentStems);

// for (let i = 0; i < shireFrequentWords.length; i++) {
//   console.log("in shireFrequentWords loop")
//     for (let j=0; j<frequentStems.length; j++) { // forEach instead?
//       console.log("in frequentStems loop")
//       if (shireFrequentWords[i].stem != frequentStems[j].stem) {
//         let uniqueStem = {
//           stem: shireFrequentWords[i].stem,
//           words: [shireFrequentWords[i].word],
//         }
//         frequentStems.push(uniqueStem);
//       } else if (shireFrequentWords[i].stem == frequentStems[j].stem) {
//         frequentStems[j].words.push(shireFrequentWords[i].word);
//       }
//     }
// }

// for (let i=0; i<frequentStems.length; i++) {
//   console.log(frequentStems[i]);
//   console.log("in for loop");
// }


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
      
      
      // If the tfidf value of the word is above the treshold...
      if (tfIDF.dict[tfIDF.keys[i]].tfidf > tfidfTreshold) {

        // let wordStem = natural.PorterStemmer.stem(shireFrequentWords[j].word);
        
        
        getPOS(shireFrequentWords[j].word);
        // Assign docCount and tfidf values to it
        Object.assign(shireFrequentWords[j], {
        // POS: getPOS(shireFrequentWords[j].word),
        // stem: wordStem,
        count_in_all_docs: tfIDF.dict[tfIDF.keys[i]].count,
        docs_with_it: tfIDF.dict[tfIDF.keys[i]].docCount,
        tfidf: tfIDF.dict[tfIDF.keys[i]].tfidf,
        }); 
        // console.log(shireFrequentWords[j]);
      }
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

