
//logic and algorthm that are inside the curly braces is known as scope
 
// var c = 300
// GLOBAL SCOPE
let a = 300
    
if(true){  //block scole
    let a = 10
    const b = 20
    c = 30
    // console.log("INNER : " +  a);
    
}
let array = [10,20,30,40,50]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
}

// console.log("OUTER : " + a);

function one(){
    const username = "abhishek"

    function two(){
        const website = "Youtube"
        console.log(username)   //username will print 
    }
    // console.log(website);  //this website will not print
    
    two()   //function call
}

// one()   //function call

if(true){
    const username = "sonu"
    if(username === "sonu"){
        const website = " instagram"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)


// ****************

console.log(addOne(5))

function addOne(num){
    return num + 1
}


const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5));


