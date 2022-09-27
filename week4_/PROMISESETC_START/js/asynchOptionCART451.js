/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 //asynch / await -> available in es8
 //return promises just like before
 //USEs promises behind the scenes
 //looks LIKE synchronous code ... no need for .then() - 
 //you though can ONLY await INSIDE asynch functions...

*/
//window.onload = function () {
    const buttonCallJ = document.querySelector("#callbackJ");
    const responseJ = document.querySelector("#responseJ");
    
    buttonCallJ.addEventListener("click", function () {
      console.log("clicked");

}); //button

