const prompt = require('prompt-sync')()

num = prompt('Enter a number: ')
num = parseInt(num)

// With for
for (let i = 1; i <= num; i++) {
    console.log(i)
}

console.log('')

// With while
let i = 1
while(i <= num) {
    console.log(i)
    i++
}

console.log('')


// With do-while
i = 1
do {
    console.log(i)
    i++
} while (i <= num);