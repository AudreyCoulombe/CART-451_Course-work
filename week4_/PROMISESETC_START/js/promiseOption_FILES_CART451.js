//file access + asynch ...
//window.onload = function () {
const buttonCallC = document.querySelector("#callbackC");
const responseC = document.querySelector("#responseC");

const buttonCallD = document.querySelector("#callbackD");
const responseD = document.querySelector("#responseD");
const responseE = document.querySelector("#responseE");
const responseF = document.querySelector("#responseF");

const buttonCallG = document.querySelector("#callbackG");
const responseG = document.querySelector("#responseG");
const responseH = document.querySelector("#responseH");
const responseI = document.querySelector("#responseI");

//A LOCAL JS ...
let jsobject = {
  title: "FAVORITE LOCAL STUFF",
  favorite_veg: "asparagus",
  favorite_fruit: "watermelon",
  favorite_color: "aqua-marine",
};

buttonCallC.addEventListener("click", function () {
  console.log("clicked C");

});

buttonCallD.addEventListener("click", function () {
  console.log("clicked D");

}); //button click



/*************************** */
buttonCallG.addEventListener("click", function () {
  console.log("clicked G");
}); //buttonclick

/********************* */

// format json object - helper :)
function formatJSObj(data) {
  return `
        ${data.title}
         <br />
         Fruit: ${data.favorite_fruit} <br />
         Veg: ${data.favorite_veg} <br />
        Color: ${data.favorite_color} 
        <br /> `;
}

//run ...
//};
