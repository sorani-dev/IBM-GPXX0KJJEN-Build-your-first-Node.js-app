// Package to prompt the user for input
const prompt = require("prompt-sync")();

const birthdays = {
    "friends": [
        { "name": "Wendy", "Birthday": "12th October" },
        { "name": "Jacob", "Birthday": "15th March" },
        { "name": "Nicolas", "Birthday": "3rd June" },
        { "name": "Marcus", "Birthday": "16th December" }
    ]
}

let name = prompt("Enter a name you want to search for: ")

let theBirthday = birthdays.friends.filter(friend => friend.name === name)

if (theBirthday.length == 0) {
    console.log('No firend found by the name: ${name}')
} else {
    console.log(theBirthday)
}