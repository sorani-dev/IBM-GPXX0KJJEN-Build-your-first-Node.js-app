//Array objects

//String array
let myStrArray = ["Ava","Bella","Charlie","Dave"];
console.log(myStrArray.indexOf("Ava"))

//int array
let myIntArray = [1,2,3,4,5]
console.log(myIntArray.length)

//Array can also be mixed
let myMixedArray = [1,"Ava",true,[2,3],5.5]

console.log("Iterating through array with for-in")
//Iterating through array - Special for loop
//x gets the index value of each element
for (x in myMixedArray) {
    console.log(myMixedArray[x]);
}

console.log("Iterating through array with for each")
//Iterating through array - Special for loop
//forEach  - ES6 
myMixedArray.forEach(element => {
    console.log(element);
});


//Dictionary Object - key value pairs
let myDict = {"name":"John","age":10,"Grade":"4"}

console.log("Traversing a dictionary");

for ([key, value] of Object.entries(myDict)) {
    console.log(key, value);
}
