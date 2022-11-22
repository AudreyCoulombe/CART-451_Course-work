$(document).ready(go);


let words = [
    {
        word: 'back',
        stem: 'back',
        POS: 'RB',
        count_in_Shires_poems: 1,
        count_in_all_docs: 27,
        docs_with_it: 3,
        tfidf: 0.001240685627977518
      },
      {
        word: 'backwards',
        stem: 'backward',
        POS: 'RB',
        count_in_Shires_poems: 1,
        count_in_all_docs: 3,
        docs_with_it: 1,
        tfidf: 0.00029226213171260307
      },
      {
        word: 'hero',
        stem: 'hero',
        POS: 'NN',
        count_in_Shires_poems: 1,
        count_in_all_docs: 4,
        docs_with_it: 2,
        tfidf: 0.0002597885615223139
      },
      {
        word: 'hello',
        stem: 'hello',
        POS: 'UH',
        count_in_Shires_poems: 2,
        count_in_all_docs: 2,
        docs_with_it: 1,
        tfidf: 0.0001948414211417354
      },
      {
        word: 'heroes',
        stem: 'hero',
        POS: 'NNS',
        count_in_Shires_poems: 1,
        count_in_all_docs: 1,
        docs_with_it: 1,
        tfidf: 0.0000974207105708677
      }
]


function go () {


    // console.log(words[1].word);
    for (let i= 0; i<words.length; i++) {
        // words[i].word
        let para = document.createElement("p");
        const text = document.createTextNode(words[i].word);

        let blue = 250;
        let opacity = 0.5;
        // para.style.color = "rgb(60, 179, 113)";
        para.style.color = `rgb(0, 0, ${blue},${opacity})`;

        para.appendChild(text);
        const element = document.getElementById("poster");
        element.appendChild(para);

        // words[i].tfidf
        // words[i].count_in_Shires_poems
        // `String text ${expression}`

    }
    // createPoster("hello div");
    // console.log("we are in createPoster")
    // let para = document.createElement("p");
    // const node = document.createTextNode("This is new.");
    // para.appendChild(node);
    // const element = document.getElementById("poster");
    // element.appendChild(para);


    // const box = `
    // <div id='box'>
    //   <button id='button-1'>Button</button>
    // </div>`;

    // document.body.innerHTML = box;

    // word: 'heroes',
    // stem: 'hero',
    // POS: 'NNS',
    // count_in_Shires_poems: 1,
    // count_in_all_docs: 1,
    // docs_with_it: 1,
    // tfidf: 0.0000974207105708677
    
}

function getPosition() {

}

