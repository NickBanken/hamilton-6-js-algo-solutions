const readlineSync = require("readline-sync");


let dayOfWeek = readlineSync.question("entrez un nombre");

if(dayOfWeek==1){
    console.log("On est Lundi !");
}else if(dayOfWeek==2)
{
    console.log("On est Mardi !");
}else if(dayOfWeek==3)
{
    console.log("On est Mercredi !");
}else if(dayOfWeek==4)
{
    console.log("On est Jeudi !");
}else if(dayOfWeek==5)
{
    console.log("On est Vendredi !");
}else if(dayOfWeek==6)
{
    console.log("On est Samedi !");
}else if(dayOfWeek==7)
{
    console.log("On est Dimanche !");
}else {
    console.log("Je ne pense pas que ce jour existe!");
};