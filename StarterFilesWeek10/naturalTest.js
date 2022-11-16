// npm init
// npm install natural


let natural = require("natural");
console.log(natural);

// Tokes: http://naturalnode.github.io/natural/Tokenizers.html
let tokenizer = new natural.WordTokenizer();
let tokens = tokenizer.tokenize("the lazy dog jumped over the high mountains."); //here, could be reading from txt file
console.log(tokens);

// stemmers: http://naturalnode.github.io/natural/stemmers.html 
// porter stemmer = to consider plural??
console.log(natural.PorterStemmer.stem(tokens[7]));


// consider multiple sentences

//IMPORTANT FOR CART 345:**********************************************
// N grams: http://naturalnode.github.io/natural/n_grams.html (look at words together)
// common n-gram = trigram (3 words) to analyse what should come next (for word prediction)
let sentenceSplitter = new natural.SentenceTokenizer();
let NGrams = natural.NGrams;
let bigrams = NGrams.bigrams("the lazy dog jumped over the high mountains.");
console.log(bigrams);
let trigrams = NGrams.trigrams("the lazy dog jumped over the high mountains.");
console.log(trigrams);



// For "parts of speech": http://naturalnode.github.io/natural/brill_pos_tagger.html 
// To know if DT (determinant), VB (verb), etc.
const language = "EN"
const defaultCategory = 'N';
const defaultCategoryCapitalized = 'NNP';

var lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
var ruleSet = new natural.RuleSet('EN');
var tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
console.log(tagger.tag(tokens));


// Use wordnet (https://wordnet.princeton.edu/)
// http://naturalnode.github.io/natural/wordnet.html
// WordNet® is a large lexical database of English. Nouns, verbs, adjectives and adverbs are grouped into sets of cognitive synonyms (synsets), each expressing a distinct concept. 
// wordnet can be accessed with natural
// ***********************install wordnet.db: npm install wordnet-db
var wordnet = new natural.WordNet();

wordnet.lookup('chair', function(results) { //looks up on the internet
    results.forEach(function(result) {
        console.log('------------------------------------');
        console.log(result.synsetOffset);
        console.log(result.pos);
        console.log(result.lemma);
        console.log(result.synonyms);
        console.log(result.gloss);
    });
});