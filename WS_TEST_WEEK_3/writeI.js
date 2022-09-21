// Run this file (note: writeI-->capital i, not an l) with terminal and it will create a new file in myFiles folfer
const fs = require('fs'); // fs is installed in node core module (not folder but on computer)
const fileContainer = './myFiles/fileA.txt';
let data = "this is my test string written at "+(new Date)+"to "+fileContainer;
fs.writeFileSync(fileContainer, data); //fs=file system; writefilesync=inbuilt

// will over write first
let dataTwo= "this is my second test string written at "+(new Date)+"to "+fileContainer;
fs.writeFileSync(fileContainer, dataTwo);

// will over write first and second
let dataThird = "this is my third test string written at "+(new Date)+"to "+fileContainer+"\n"+"more text on second line";
fs.writeFileSync(fileContainer, dataThird);

// append doesnt create a file if it doesn<t already exist, but write file sync yes
let textToAppend = "\n" + (new Date) + " Text copied and appended  to " + fileContainer;
fs.appendFileSync(fileContainer, textToAppend);