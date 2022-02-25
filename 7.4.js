const readlineSync = require("readline-sync");
const fs = require('fs');
const path = require('path');

console.clear();
console.log("Hello! Welcome to the Pizza Flavors Manager.");
var pizzaList = fs.readFileSync(path.resolve(__dirname, './7.4.liste.txt')).toString().split("/n");
let exit = true;

while(exit){
    console.log(" ");
    console.log("Please choose your action : ");
    console.log(" ");
    console.log("1 - List all the pizza flavors");
    console.log("2 - Add a new pizza flavor"); 
    console.log("3 - Remove a pizza flavor");
    console.log("4 - Save and exit");
    console.log(" ");
    chose = readlineSync.question(`Enter your action's number : `);
    switch (chose){
        case '1' : showAll();
        break;
        case '2' : addOne();
        break;
        case '3' : removeOne();
        break;
        case '4' : saveList();
        console.log("Goodbye, list saved");
        exit=false;
        break;
        default : console.log("This is not a valid selection")
        break;
    }
}
function showAll(){
    let x = 1;
    pizzaList.forEach(pizza => {
        console.log(`[${x}] ${pizza}`); 
        x++;
    });
}

function addOne(){
    pizzaList.push(readlineSync.question(`Wich flavor would you like to add ? `));
}

function removeOne(){
    showAll();
    toDelete = parseInt(readlineSync.question(`Wich one would you like to delete ? `));
    if(toDelete<=pizzaList.length){
        pizzaList.splice([toDelete-1],1);
    }
    else console.log(`Sorry it not exit !!!`);
}
function saveList(){
    fs.writeFileSync(path.resolve(__dirname, './7.4.liste.txt'),pizzaList.join("/n"));
}