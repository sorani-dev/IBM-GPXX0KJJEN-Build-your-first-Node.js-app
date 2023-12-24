# Practice Exercises

1. Write code which accepts user input as a number. Depending on the number input, between 1 to 7, prints days of the week starting from Sunday for 1.

    >*Hint - You can use if-else if- else or switch-case*

    ```js
    let prompt = require('prompt-sync')();
    let num = prompt('Enter a number between 1 to 7 ');
    num = parseInt(num);
    switch(num){
        case 1: console.log("Sunday");break;
        case 2: console.log("Monday");break;
        case 3: console.log("Tuesday");break;
        case 4: console.log("Wednesday");break;
        case 5: console.log("Thursday");break;
        case 6: console.log("Friday");break;
        case 7: console.log("Saturday");break;
        default: console.log("Invalid entry");
    }
    ```

2. View and run Exercise1a-Operators.js. This is focussed on operators. You can refer to the [cheatsheet](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/Cheatsheets/NodeJSCheatSheets.md.html) to get more ideas. We also use `parseInt` (convert a string to an int) and `isNaN` (Checks if not a number) methods.

    ```bash
    node Exercise1a-Operators.js
    ```

3. Write a code which accepts an input from the user and prints whether it is a number or not.

    ```js
    const prompt = require("prompt-sync")();
    let printMyInputType = (user_input) => {
        user_input = parseInt(user_input);
        if(isNaN(user_input)) {
            console.log("User input is not a number");
        } else {
            console.log("User input is a number");
        }
    }
    let user_input = prompt("Enter some string or number: ");
    printMyInputType(user_input)
    ```

4. View and run Exercise2-Loops.js. This is focussed on for loop, while loop and do while.

    ```bash
    node Exercise2-Loops.js
    ```

5. Write a code which accepts a number and loops from 1 until that number and prints the value.

    ```js
    let prompt = require('prompt-sync')();
    let num = prompt('Enter a number ');
    num = parseInt(num);

    for (i=1;i<=num;i++) {
        console.log(i);
    }
    ```

    >*Additional Challenge: Try doing the same with while and do while loops*

6. View and run Exercise3-CollectionObjects.js. This is focussed on arrays and dictionary objects.

     ```bash
    node Exercise3-CollectionObjects.js
    ```

7. Write a code which stores the colours of the rainbow in a string array and prints the values using a for-in loop.

    ```js
    let rainbow = ["Violet","Indigo","Blue","Green","Yellow","Orange","Red"]

    for (i in rainbow) {
        console.log(rainbow[i])
    }
    ```

8. View and run Exercise4-JSONObjects.js.This is focussed on JSON Objects and traversing through them and filtering them.

    ```bash
    node Exercise4-JSONObjects.js
    ```

9. Write a code which store the following JSON object as birthday register and searches through it based on the name input by the user and print the birthday.

    ```js
    {"friends":[
        {"name":"Wendy","Birthday":"12th October"},
        {"name":"Jacob","Birthday":"15th March"},
        {"name":"Nicolas","Birthday":"3rd June"},
        {"name":"Marcus","Birthday":"16th December"}
    ]}
    ```

    ```js
    let birthdayRegister = {"friends":[
        {"name":"Wendy","Birthday":"12th October"},
        {"name":"Jacob","Birthday":"15th March"},
        {"name":"Nicolas","Birthday":"3rd June"},
        {"name":"Marcus","Birthday":"16th December"}
    ]}

    let prompt = require("prompt-sync")();
    let friendName = prompt("Enter the name to find birthday ");

    let friendObj = birthdayRegister.friends.filter(friend=>{
        return friend.name === friendName
    })

    if(friendObj.length != 0) {
        console.log(friendObj[0].Birthday)
    } else {
        console.log("Name not in register");
    }
    ```

## Author(s)

Lavanya

## Changelog

Date|Version|Changed by|Change Description|
----|-------|----------|------------------|
1-Sep-2021|1.0|Lavanya|Created the lab
18-Jan-2023|2.0|Lavanya|Updated the lab

© IBM Corporation 2023. All rights reserved.
