// Run this file with terminal and it will create a new file in myFiles folfer
const fs = require('fs'); // fs is installed in node core module (not folder but on computer)
const fileContainer = './myFiles/fileA.txt';
let data = "this is my test string written at "+(new Date)+"to "+fileContainer;
fs.writeFileSync(fileContainer, data); //fs=file system; writefilesync=inbuilt

