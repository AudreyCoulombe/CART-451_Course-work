// // //2- This returns an object with a single property: name. You can load and get the value returned by the name function – with code like this (add to index.js):
// // //add a reference to the module... 
// // const testModuleVar = require('./testModule'); // don<t need .js. The dot means current working path
// // //call the function name ... 
// // console.log('Results: ' + testModuleVar.name());

// // //4-
// // testModuleVar.setPetName("santiago");
// // //5-get pet name
// // console.log(testModuleVar.getPetName("santiago"));

// // //6
// // testModuleVar.appendPetName

// //use the static ...
// const testModuleStat = require('./staticModule');
// console.log(testModuleStat);
 
// testModuleStat.passMessage("testMessage");
// testModuleStat.passMessage("testMessage_2");
// testModuleStat.passMessage("testMessage_3");
 
// // next var
// const testModuleStatTwo = require('./staticModule');
// console.log(testModuleStatTwo);
// testModuleStatTwo.passMessage("testMessage");
// testModuleStatTwo.passMessage("testMessage_2");
// testModuleStatTwo.passMessage("testMessage_3");

// module.exports = function() {
//     //private member
//       let messageCount = 0;
//       let messages = [];
     
//       function passMessage (message) {
//         //used internally ...
//          messageCount++;
//          messages.push(message);
//          console.log(`Message Count: ${messageCount}`);
     
//       }
     
//       function printMessages () {
//         for(let i =0; i< messages.length; i++){
//            console.log(`message num: ${i} , the message: ${messages[i]}`);
//         }
     
//       }
     
//       // public members
//       return {
//            addMessage: passMessage,
//           accessMessages: printMessages,
//        };
     
//     }

const testModuleClass = require('./classModule');
//using "classes" -> no we are not having to "invoke" -> gives us a REF to the base definition....
//The require statement gives you what many other languages call the base type.
console.log(testModuleClass);
 
//make two seperate instances..
let instA = new testModuleClass();
console.log(instA);
instA.passMessage("testMessage Again");
instA.passMessage("testMessageTwo Again");
instA.printMessages();
console.log(instA);
 
 
let instB = new testModuleClass();
console.log(instB);
instB.passMessage("testMessageOnB Again");
instB.printMessages();
console.log(instB);