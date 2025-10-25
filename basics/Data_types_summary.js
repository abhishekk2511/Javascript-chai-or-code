// Primitive
// 7 types : string, number, Boolean , null, undefined, symbol, BigInt

// int float does not matter, number only
const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null   //means empty 

let userEmail = undefined  // means not Defined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
 
// bigInt
const bigNumber = 748374895783749875574754753475479n

console.log(bigNumber)  


//  Reference (Non-Primitive)
// array, object, function

// array
const heros = ["abhishek", "sonu", "yash"]

// object
let myObj = {
    name : "abhishek",
    age : 22
}

// function
const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof myFunction);
// console.log(typeof myObj);
// console.log(typeof heros);


// **************************************************************

// Stack And Heap Memory -> stack used in primitive like number, string , boolean and(there is copy passed) 
//                          heap is used in non primitive like array, object (there is Reference passed)

console.log("**********STACK AND HEAP MEMORY********");


let myYoutubeName = "abhishek kumar"

let anotherName = myYoutubeName
anotherName = "sonu"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email : "abhishek@gmail.com", 
    upi : "abhi@123"
}

let UserTwo = userOne

UserTwo.email = "sonu@gmail.com"

console.log(UserTwo.upi);
