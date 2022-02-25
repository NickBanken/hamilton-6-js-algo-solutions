const readlineSync=require('readline-sync');

console.log('select operation +,-,/ or x');

let operation = readlineSync.question("select arithmetic operation ");
let operand1=new Number(readlineSync.question("Enter a number "));
let operand2=new Number(readlineSync.question("Enter second number "));

console.log("Press +, -, x and / to do calculations");

switch(operation){
    case "+":
        console.log("The sum is "+ (operand1+operand2));
        break;
    case "-":
        console.log("The subtraction is "+ (operand1-operand2));
        break;
    case "x":
        console.log("The multiplication is "+ (operand1*operand2));
        break;
    case "/":
        console.log("The division is "+ (operand1/operand2));
        break; 
    default:
        console.log("Please select a correct arithmetic operation");
        break;
}

