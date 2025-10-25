const score = 700
console.log(score);


const balance = new Number(678)
console.log(balance);

console.log(balance.toString().length); //convert it into string and give its length
console.log(balance.toFixed(1));  //add digits after decimals, in this 1 decimal value added

const otherNumber = 4345.89993
console.log(otherNumber.toPrecision(5));  //gives precision value

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));   //gives commas between zeros

console.log("**********MATHS**********");

// console.log(Math)
// console.log(Math.abs(-4)); //convert negative into positive, +ve remains +ve
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,6,5,3,9));
// console.log(Math.max(4,6,5,3,9));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor (Math.random()*10) + 1);

const min = 10;
const max = 30

console.log(Math.floor(Math.random() *  (max - min + 1)) + min)



