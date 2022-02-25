const readlineSync = require("readline-sync");


let firstname = readlineSync.question('Enter your first name');
let name = readlineSync.question('Enter your name');
let city = readlineSync.question('Enter your city');


console.log("Your name is " + firstname  + name + ' and you live in ' + city);
