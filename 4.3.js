
function rand10(){ 
    // This is a fucnction which gives any random number between 1 and 10
    return (parseInt((Math.random()*10))+1);
}

function multiRand(n){
     // This is a fucnction generates n number of random numbers and return it in an array
    let arr=[];
    while(n>0){
        arr.push(rand10());
        n--;
}
return arr;
}





const readlineSync = require("readline-sync");
let n=new Number(readlineSync.question("how many random numbers would you like to generate? "));

console.log(multiRand(n));



