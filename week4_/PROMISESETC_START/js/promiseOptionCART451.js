// a promise - promises something in the future
// inside the promise is what executes ...
//resolve() - tells js that we are done and have a value
//reject() - used to throw  an  error
//promises are great because you do not need to nest the code - easier to control
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//window.onload = function () {
const buttonCallB = document.querySelector("#callbackB");
const responseB = document.querySelector("#responseB");

buttonCallB.addEventListener("click", function () {
  console.log("clicked B");
})

  
//};
