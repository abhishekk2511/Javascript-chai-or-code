const user = {  //it is a object
    username : "abhishek",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}

// this keyword only work inside a object not a function


// user.welcomeMessage();
// user.username = "sonu"
// user.welcomeMessage()
    
// console.log(this);

// function chai(){
//     let username = "abhishek"
//     console.log(this.username)  //this keyword not work in function, this gives undefined
// }

// chai()  

// const chai = function(){
//     let username = "abhishek"
//     console.log(this.username)  //this keyword not work in function, this gives undefined
// }

// chai()

// ARROW FUNCTION
const chai = () => {
    let username = "abhishek"
    console.log(this.username)
}
// chai()

// basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// Implicit Arrow Function
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 3))

// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(3, 3))

const addTwo = () =>  ({username : "Abhishek"})
console.log(addTwo());
