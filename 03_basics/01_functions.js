
function sayMyName () {
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("k");    
}

// sayMyName()

function addTwoNumber (num1, num2){
    // console.log(m1 + num2);
    return num1+num2
}
let result = addTwoNumber(3, 3)
// console.log(result);

function loginuserName(userName){
    if(!undefined){
        console.log("Please enter a username");
        // return
    }
    return `${userName} just logged in` 
}
// loginuserName("abhishek")
// console.log(loginuserName("abhishek"));

// shopping cart Situation

function calculateCartPrice (...num1) { 
    return num1
}

// console.log(calculateCartPrice(200,500,300));

// through object
const user1 = { 
    username : "Abhishek",
    price : 304
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}   

// handleObject(user1)

// function mai object pass
// handleObject({
//     username : "somu",
//     price : 804
// })


// in Array

let Arrayuser = [200,13,44,56]

function arrayfinder(getarray){
    return getarray[1]
}

console.log(arrayfinder(Arrayuser));
