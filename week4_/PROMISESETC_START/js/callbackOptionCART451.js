//1: TASK ... lets simulate something that happens after a certain time :::
//i.e. we have to have something that happens in a sequence ... one thing after the other::

//NOTE we are not over complicating by sending to the server  ...

//a - user puts in user string and script will check (if it matches) (we have a timeout here)
//b// it then will fetch the associated fruit if the credentials are correct (again another timeout)
//c does something to the user string ...  - i.e. puts stars in between the usuer name (another time out)
//d sends the rsult back to the user///

// -- these 4 things must happen in sequence  --
//window.onload = function () {
const buttonCallA = document.querySelector("#callbackA");
const responseA = document.querySelector("#responseA");

buttonCallA.addEventListener("click", () => {
  console.log("click");

});

// /*** option 1 :: everything happens as single functions */
// function checkAuth_A(userString) {
//   //console.log(userString);
//   setTimeout(() => {
//     let userFruit = "";
//     if (userString === "Sabine") {
//       userFruit = "pineapple";
//     } else {
//       userFruit = "noFruit";
//     }
//     console.log("time-out one-a complete " + userFruit);
//     return userFruit;
//   }, 5000); // let 5 secs go past then send back
// }

// function changeString_A(fruitString) {
//   //console.log(userString);
//   setTimeout(() => {
//     let userFruitwithstars = fruitString.split("").join("*");
//     console.log("time-out two-a complete " + fruitString);
//     return userFruit;
//   }, 5000); // let 5 secs go past then send back
// }

// /*** option 2 :: callback  */
// //cb ==callback
// function checkAuth_B(userString, cb) {
//   //console.log(userString);
//   setTimeout(() => {
//     let userFruit = "";
//     if (userString === "Sabine") {
//       userFruit = "pineapple";
//     } else {
//       userFruit = "noFruit";
//     }
//     console.log("time-out one-b complete " + userFruit);

//     //CALL the callback function :)
//     cb(userFruit);
//   }, 5000); // let 5 secs go past then send back
// }

// function changeString_B(fruitString) {
//   //console.log(userString);
//   setTimeout(() => {
//     let userFruitwithstars = fruitString.split("").join("*");

//     console.log("time-out two-b complete " + userFruitwithstars);
//     return userFruitwithstars;
//   }, 5000); // let 5 secs go past then send back
// }

//for second-part of option callback - change string now also takes a callback parameter

// function checkAuth_C(userString, cb) {
//   //console.log(userString);
//   setTimeout(() => {
//     let userFruit = "";
//     if (userString === "Sabine") {
//       userFruit = "pineapple";
//     } else {
//       userFruit = "noFruit";
//     }
//     console.log("time-out one-c complete " + userFruit);

//     //CALL the callback function :)
//     //AND the other callback
//     cb(userFruit, sendBackToUser);
//   }, 5000); // let 5 secs go past then send back
// }

// function changeString_C(fruitString, cb) {
//   //console.log(userString);
//   setTimeout(() => {
//     let userFruitwithstars = fruitString.split("").join("*");

//     console.log("time-out two-c complete " + userFruitwithstars);
//     cb(userFruitwithstars);

//     //return userFruitwithstars;
//   }, 5000); // let 5 secs go past then send back
// }

// function sendBackToUser(starredString) {
//   //console.log(userString);
//   setTimeout(() => {
//     console.log("time-out three-c complete  and will now display to user");
//     responseA.innerHTML = starredString;

//     //return userFruitwithstars;
//   }, 5000); // let 5 secs go past then send back
// }


