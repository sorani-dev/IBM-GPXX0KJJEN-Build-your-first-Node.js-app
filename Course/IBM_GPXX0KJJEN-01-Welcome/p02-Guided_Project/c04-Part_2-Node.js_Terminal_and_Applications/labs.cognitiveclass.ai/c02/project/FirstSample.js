//require the  package to be used in the code and assign it to a variable name
const prompt = require("prompt-sync")();

//Create an ES6 arrow function that prints any parameter that is passed
let printMyInput = (user_input) => {
    console.log("The parameter passed is " + user_input)
}

let user_input = prompt("Enter some string or number: ");

//Call the method passing the user_input as parameter
printMyInput(user_input)