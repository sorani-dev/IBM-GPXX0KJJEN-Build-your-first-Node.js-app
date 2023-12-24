//Require the package for user input
const prompt = require("prompt-sync")();

let num1 = prompt("Enter a number ");
let num2 = prompt("Enter another number ");

/*
We will use parseInt to convert input to number
We will use isNaN function to check if the input is number
We are using the arithmetic operator + and logical operator
|| 
*/
num1 = parseInt(num1)
num2 = parseInt(num2)
console.log("Using || and + operator")
if(isNaN(num1) || isNaN(num2)) {
    console.log("Input has to be numbers")
} else {
    console.log(num1+num2)
}

/*
Another way to check if both input are numbers 
using the && operator and then print the product
of the number using * operator. 
*/
console.log("Using && and * operator")
if(isNaN(num1) == false && isNaN(num2) == false) {
    console.log(num1*num2);
} else {
    console.log("Input has to be numbers")
}

/*
Another way to check if both input are numbers 
using the ! operator and then print the product
of the number using * operator. 
*/
console.log("Using ! and - operator")
if(!isNaN(num1) && !isNaN(num2)) {
    console.log(num1-num2);
} else {
    console.log("Input has to be numbers")
}

/*
++, += operators
*/
console.log("Value of i with ++ operators")
let i = 5;
//i++ does the action and then increments.
//Here it prints the value and then increments i by 1
console.log(i++)
console.log(i)

//++i increments by 1 and then does the action.
console.log(++i)



