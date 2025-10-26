// Singleton

// object Literals

const mySym = Symbol("key1")

const JSUser = {
    name :  "Abhishek",
    "full name" : "Abhishek Kumar",
    [mySym] : "mykey1",  //sqaure Bracket used for Symbol
    age : 22,
    location : "Delhi",
    email : "abhishek@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JSUser.email);  //used to access the value
// console.log(JSUser["email"]);  //email is passed as a string because in object, it trackes as a string
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym])

JSUser.email = "abhishek@google.com"
// Object.freeze(JSUser)   //now object cant be edited
JSUser.email = "sonu@gmail.com"  //try to change but it cant change 

// console.log(JSUser);

JSUser.greetings1 = function(){
    console.log("Hello JS User");
}
JSUser.greetings2 = function(){
    console.log(`Hello JS User, Mr. ${this.name}`);
}

console.log(JSUser.greetings1());
console.log(JSUser.greetings2());



