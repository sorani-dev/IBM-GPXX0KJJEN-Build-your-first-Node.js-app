//JSON - Java Script Object Notation
//Extension of dictionary

let myJson = {"students":[
    {
        "id":"S001",
        "Name":"John",
        "Grade":"4"
    },
    {
        "id":"S002",
        "Name":"Jacob",
        "Grade":"6"
    },
    {
        "id":"S003",
        "Name":"Jennifer",
        "Grade":"5"
    },
]}

console.log(JSON.stringify(myJson,null,2))

console.log("Using filter")
//Filter to retrieves all the students by name
//Require the package for user input
const prompt = require("prompt-sync")();
let studentName = prompt("Enter a name you want to search for ")
let myStudent = myJson.students.filter(student=>{
    return (student.Name === studentName)
})
if(myStudent.length != 0) {
    console.log(myStudent)
} else {
    console.log("No such student");
}
