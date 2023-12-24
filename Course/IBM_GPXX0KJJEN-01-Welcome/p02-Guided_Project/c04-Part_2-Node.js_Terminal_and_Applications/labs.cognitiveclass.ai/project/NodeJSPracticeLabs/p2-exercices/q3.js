const prompt = require('prompt-sync')()

num = prompt('Enter value: ')
num = parseInt(num)

// Input cannot be converted to a number
if (isNaN(num)) {
    console.log('Input is not a number')
} else {
    console.log('Input is a number')
}