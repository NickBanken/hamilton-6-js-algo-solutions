const readlineSync = require("readline-sync");
//define a variable
let name = new String(readlineSync.question('What is your name ? '));
//display it 
console.log("Hey " + name );