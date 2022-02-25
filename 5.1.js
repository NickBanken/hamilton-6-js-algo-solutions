const readlineSync = require("readline-sync");

let name = readlineSync.question ("What's the name of your favorite TV serie?");
let prodYear = readlineSync.question ("What's the production year of your favorite TV serie?");
let table = []

let members;
while(true){
    members = readlineSync.question("Add cast members? Say no to stop the questions");
    if(members == 'no'){
        break;
    } else {
        table.push(members);
        console.log('Add 1 more');
    }
}

function askTvSerie(name,prodYear,members){
    
    let obj = {
        "name" : name,
        "prodYear" : prodYear,
        "members" : table,
    }

    console.log(JSON.stringify(obj));
}

askTvSerie(name,prodYear,members)