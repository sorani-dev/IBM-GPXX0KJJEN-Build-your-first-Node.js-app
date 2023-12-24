//Require the package for user input
const prompt = require("prompt-sync")();

let name = prompt("Enter a your name: ");

//Example for if-else
if(name.length >5 ) {
    console.log(name, "is a long name")
} else {
    console.log(name, "is a short name")
}

//if-else if
let num = prompt("Enter a number between one to five ")
num = parseInt(num)

if (num === 1) {
    console.log("You entered one")
} else if (num === 2){
    console.log("You entered two")
} else if (num === 3){
    console.log("You entered three")
} else if (num === 4){
    console.log("You entered four")
} else if (num === 5){
    console.log("You entered five")
} else {
    console.log("Invalid input")
}

//example of switch-case 
switch(num) {
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four");break;
    case 5: console.log("Five");break;
    default: console.log("Invalid output")
}