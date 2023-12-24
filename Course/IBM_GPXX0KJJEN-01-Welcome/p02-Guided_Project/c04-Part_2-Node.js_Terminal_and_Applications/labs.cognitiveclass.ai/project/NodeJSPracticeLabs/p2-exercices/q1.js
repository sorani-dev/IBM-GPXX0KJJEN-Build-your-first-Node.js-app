//Require the package for user input
const prompt = require("prompt-sync")();

let num = prompt("Enter a number between 1 and 7: ");
num = parseInt(num)

switch (num) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.loga("Saturday");
        break;

    default:
        console.log("Invalid input");
        break;
}
