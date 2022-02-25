
const readlineSync = require("readline-sync");


let nbrOne = readlineSync.question("Give number with decimal : ");

let nbrTwo = readlineSync.question(" Again : ");


console.log(Math.floor(nbrOne) * nbrTwo);



/*

Ask two numbers with decimal part to the user. 
For the first one only keep the integer part. 
Then multiply them and display the result.

*/