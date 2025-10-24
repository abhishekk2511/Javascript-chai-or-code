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
const bigNumber = 74837489574857438574839574395743985739857349875983749875574754753475479n

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

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);

