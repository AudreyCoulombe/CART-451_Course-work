$(document).ready(go);

let words = [
  {
    word: 'home',
    stem: 'home',
    POS: 'NN',
    count_in_Shires_poems: 31,
    count_in_all_docs: 34,
    docs_with_it: 3,
    tfidf: 0.001562344864860578
  },
  {
    word: 'mouth',
    stem: 'mouth',
    POS: 'NN',
    count_in_Shires_poems: 18,
    count_in_all_docs: 22,
    docs_with_it: 3,
    tfidf: 0.0010109290302039034
  },
  {
    word: 'love',
    stem: 'love',
    POS: 'NN',
    count_in_Shires_poems: 20,
    count_in_all_docs: 44,
    docs_with_it: 5,
    tfidf: 0.0009688542866084888
  },
  {
    word: 'hair',
    stem: 'hair',
    POS: 'NN',
    count_in_Shires_poems: 10,
    count_in_all_docs: 14,
    docs_with_it: 2,
    tfidf: 0.0009092599653280985
  },
  {
    word: 'mother',
    stem: 'mother',
    POS: 'NN',
    count_in_Shires_poems: 15,
    count_in_all_docs: 19,
    docs_with_it: 3,
    tfidf: 0.0008730750715397348
  },
  {
    word: 'body',
    stem: 'bodi',
    POS: 'NN',
    count_in_Shires_poems: 29,
    count_in_all_docs: 36,
    docs_with_it: 5,
    tfidf: 0.0007926989617705817
  },
  {
    word: 'room',
    stem: 'room',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 10,
    docs_with_it: 2,
    tfidf: 0.0006494714038057846
  },
  {
    word: 'woman',
    stem: 'woman',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 14,
    docs_with_it: 3,
    tfidf: 0.0006433184737661203
  },
  {
    word: 'blood',
    stem: 'blood',
    POS: 'NN',
    count_in_Shires_poems: 7,
    count_in_all_docs: 13,
    docs_with_it: 3,
    tfidf: 0.0005973671542113975
  },
  {
    word: 'father',
    stem: 'father',
    POS: 'NN',
    count_in_Shires_poems: 7,
    count_in_all_docs: 9,
    docs_with_it: 2,
    tfidf: 0.0005845242634252062
  },
  {
    word: 'prison',
    stem: 'prison',
    POS: 'NN',
    count_in_Shires_poems: 6,
    count_in_all_docs: 6,
    docs_with_it: 1,
    tfidf: 0.0005845242634252061
  },
  {
    word: 'stomach',
    stem: 'stomach',
    POS: 'NN',
    count_in_Shires_poems: 6,
    count_in_all_docs: 6,
    docs_with_it: 1,
    tfidf: 0.0005845242634252061
  },
  {
    word: 'god',
    stem: 'god',
    POS: 'NN',
    count_in_Shires_poems: 7,
    count_in_all_docs: 8,
    docs_with_it: 2,
    tfidf: 0.0005195771230446278
  },
  {
    word: 'old',
    stem: 'old',
    POS: 'JJ',
    count_in_Shires_poems: 7,
    count_in_all_docs: 16,
    docs_with_it: 4,
    tfidf: 0.0005195771230446278
  },
  {
    word: 'memory',
    stem: 'memori',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 5,
    docs_with_it: 1,
    tfidf: 0.00048710355285433844
  },
  {
    word: 'bedroom',
    stem: 'bedroom',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 5,
    docs_with_it: 1,
    tfidf: 0.00048710355285433844
  },
  {
    word: 'city',
    stem: 'citi',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 7,
    docs_with_it: 2,
    tfidf: 0.00045462998266404927
  },
  {
    word: 'blue',
    stem: 'blue',
    POS: 'JJ',
    count_in_Shires_poems: 8,
    count_in_all_docs: 14,
    docs_with_it: 4,
    tfidf: 0.00045462998266404927
  },
  {
    word: 'skin',
    stem: 'skin',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 7,
    docs_with_it: 2,
    tfidf: 0.00045462998266404927
  },
  {
    word: 'name',
    stem: 'name',
    POS: 'NN',
    count_in_Shires_poems: 7,
    count_in_all_docs: 9,
    docs_with_it: 3,
    tfidf: 0.0004135618759925059
  },
  {
    word: 'hand',
    stem: 'hand',
    POS: 'NN',
    count_in_Shires_poems: 6,
    count_in_all_docs: 9,
    docs_with_it: 3,
    tfidf: 0.0004135618759925059
  },
  {
    word: 'night',
    stem: 'night',
    POS: 'NN',
    count_in_Shires_poems: 9,
    count_in_all_docs: 18,
    docs_with_it: 5,
    tfidf: 0.00039634948088529084
  },
  {
    word: 'much',
    stem: 'much',
    POS: 'JJ',
    count_in_Shires_poems: 5,
    count_in_all_docs: 6,
    docs_with_it: 2,
    tfidf: 0.0003896828422834708
  },
  {
    word: 'face',
    stem: 'face',
    POS: 'NN',
    count_in_Shires_poems: 7,
    count_in_all_docs: 11,
    docs_with_it: 4,
    tfidf: 0.0003572092720931816
  },
  {
    word: 'house',
    stem: 'hous',
    POS: 'NN',
    count_in_Shires_poems: 6,
    count_in_all_docs: 10,
    docs_with_it: 4,
    tfidf: 0.0003247357019028923
  },
  {
    word: 'full',
    stem: 'full',
    POS: 'JJ',
    count_in_Shires_poems: 5,
    count_in_all_docs: 7,
    docs_with_it: 3,
    tfidf: 0.00032165923688306017
  },
  {
    word: 'breath',
    stem: 'breath',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 7,
    docs_with_it: 3,
    tfidf: 0.00032165923688306017
  },
  {
    word: 'small',
    stem: 'small',
    POS: 'JJ',
    count_in_Shires_poems: 5,
    count_in_all_docs: 7,
    docs_with_it: 3,
    tfidf: 0.00032165923688306017
  },
  {
    word: 'fire',
    stem: 'fire',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 9,
    docs_with_it: 4,
    tfidf: 0.0002922621317126031
  },
  {
    word: 'light',
    stem: 'light',
    POS: 'NN',
    count_in_Shires_poems: 5,
    count_in_all_docs: 12,
    docs_with_it: 5,
    tfidf: 0.00026423298725686056
  },
  {
    word: 'way',
    stem: 'wai',
    POS: 'NN',
    count_in_Shires_poems: 8,
    count_in_all_docs: 18,
    docs_with_it: 6,
    tfidf: 0.00024259948855980565
  },
  {
    word: 'other',
    stem: 'other',
    POS: 'JJ',
    count_in_Shires_poems: 5,
    count_in_all_docs: 11,
    docs_with_it: 5,
    tfidf: 0.0002422135716521222
  }
]

function go () {
    for (let i= 0; i<words.length; i++) {
        let para = document.createElement("p");
        const text = document.createTextNode(words[i].word);
        let opacity = getOpacity(words[i].tfidf);
        let size = getSize(words[i]);
        let positionX = Math.random()* 100 + 50;
        let positionY = Math.random()* 100 + 150;
        
        if (words[i].POS == "NN") {
          para.style.color = `rgb(0, 0, 255, ${opacity})`;
        }
        else if (words[i].POS == "JJ") {
          para.style.color = `rgb(148, 52, 0, ${opacity})`;
        }
        para.style.fontSize = `${size}px`;

        para.style.position = "absolute";
        para.style.top = `${positionY}px`;
        para.style.left = `${positionX}px`;
        para.appendChild(text);
        const element = document.getElementById("poster");
        element.appendChild(para);
    }
}

function getOpacity(wordTFIDF) {
  let maxTFIDF = 0;
  let minTFIDF = 100;
  for (let i = 0; i< words.length; i++){
    if (maxTFIDF < words[i].tfidf) {
      maxTFIDF = words[i].tfidf;
    }
    if (minTFIDF > words[i].tfidf) {
      minTFIDF = words[i].tfidf;
    }
  }
  let opacity = (((wordTFIDF - minTFIDF) * (1.1 - 0)) / (maxTFIDF - minTFIDF)) + 0;
  return opacity;
}

function getSize(word){
  let wordCount = word.count_in_Shires_poems;
  let maxCount = 0;
  let minCount = 100;
  for (let i = 0; i< words.length; i++){
    if (maxCount < words[i].count_in_Shires_poems) {
      maxCount = words[i].count_in_Shires_poems;
    }
    if (minCount > words[i].count_in_Shires_poems) {
      minCount = words[i].count_in_Shires_poems;
    }
  }
  let size = (((wordCount - minCount) * (400 - 100)) / (maxCount - minCount)) + 0;
  return size;
}

