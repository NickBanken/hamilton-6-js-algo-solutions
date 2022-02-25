

const readlineSync = require("readline-sync");


let nbrOne = readlineSync.question("Donne un nombre : ");

let nbrTwo = readlineSync.question(" Encore un : ");


console.log(nbrOne * nbrTwo);