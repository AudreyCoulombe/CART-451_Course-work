NOTES
CART 451 - week 10
NLP workshop
We write an algorithm to compare how frequent words are in one document, and then if they appear in other documents (to extract important keywords and remove words that are in other documents, such as “and” “the”, etc. 

Frequency of words in “cat” article:
The: 17
And: 16
Cat: 15
Cats: 14

Number of articles having the word (6 articles in total):
The: 6
And: 6
Cat: 1
Cats: 1

Frequency of the word/number of articles having the word:
Cat: 15 * (6/1) = 90
Cats: 14 * (6/1) = 84
the : 17 * (6/6) = 17
And: 16 * (6/6) = 16

Add “log” to make the numbers smaller:
Cat: 15 * log(6/1) = 11.67
Cats: 14 * log(6/1) = 10.89
the : 17 * log(6/6) = 0
And: 16 * log(6/6) = 0


Divide by the number of words (100 words):
Cat: 15/100 * log(6/1) = 0.1167
Cats: 14/100 * log(6/1) = 0.1089
the : 17/100 * log(6/6) = 0
And: 16/100 * log(6/6) = 0
→THIS ALGORITHM IS IN TFIDF.js (in terminal, write node indexTFIDF.js)

NOTE: TFIDF is included in Node module: NATURAL
http://naturalnode.github.io/natural/ 
https://www.npmjs.com/package/natural 
https://github.com/NaturalNode/natural 

Treebank = most popular tokeniser http://naturalnode.github.io/natural/Tokenizers.html 

Create file naturalTest”
Npm init
Npm install natural
Test it with “node naturalTest.js”
npm install wordnet-db

For the exercise, I dont have to use wordnet, but I need to explain why I want to do something


CORE NLP: https://stanfordnlp.github.io/CoreNLP/index.html 

Core NLP: written in Java, so you need to install Java
Once you have Java installed, you can download core npl here (but heavy, 500mB): https://stanfordnlp.github.io/CoreNLP/index.html 
Written in Python, so its more logical to use python
If you use Python, look at spacy.io
You can test core nlp here: https://corenlp.run/ 
Used to analyse dependency relations between sentence components  (verb complement, subject, etc.) (ex: Mary jumped over the lazy dog. - Who jumped over the dog?)




Note: Sometimes you need to tokenise and/or split before performing an action. Issues might be due to the order in which it is done.
