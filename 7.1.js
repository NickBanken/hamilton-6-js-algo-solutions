// Random number from 1 to 100
random=(Math.random()*100)+1;

console.log("Guess the number");

// Get input from user
const readlineSync = require('readline-sync');

// Get the users guessed number
num=parseInt(readlineSync.question("Enter the number you have guessed "));

if(num>random){
    console.log("Too High");
}else if(num<=random){
    console.log("Too Low");
}else{
    console.log("Well guessed!");
}