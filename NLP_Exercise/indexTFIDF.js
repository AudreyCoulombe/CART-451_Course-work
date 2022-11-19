// NOTE: can be accessed with natural: http://naturalnode.github.io/natural/tfidf.html 
// NOTE: TFIDF means "term frequency-inverse document frequency"

// Load a file for quick testing

const TFIDF = require('./TFIDF');
let fs = require('fs');

let tfIDF = new TFIDF();

loadSamples();

function loadSamples() {
    // let filenames = [/*'fish.txt','rainbow.txt', 'cat.txt', 'phadke.txt',
    // 'eclipse.txt', 'sports.txt',*/ 'test.txt', 'tree.txt'];
    
    let filenames = [
        "WarsanShireTexts_test.txt",
        "shakespeare_comparisonTest.txt",
        "shakespeare_sampleTest.txt",];

    for (let i = 0; i < filenames.length; i++) {
        getTermFreq(filenames[i]);
    }

    for (let i = 0; i < filenames.length; i++) {
        getDocFreq(filenames[i]);
    }

    tfIDF.finish(filenames.length);
    tfIDF.sortByScore();
    tfIDF.logTheDict();
}

  function getDocFreq(filename) {
    let data =  fs.readFileSync('files/' + filename, 'utf8');
     tfIDF.docFreq(data);
 }

  function getTermFreq(filename) {
   let data =  fs.readFileSync('files/' + filename, 'utf8');
    tfIDF.termFreq(data);
}









