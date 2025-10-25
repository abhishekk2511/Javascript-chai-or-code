let FirstName = "abhishek"
let LastName = "kumar"

console.log(FirstName + " " + LastName);

// string Interpolation(new Method of String Concatination)
console.log(`My first name is ${FirstName} and my last name is ${LastName}`);

const gameName = new String('abhishek-kumar-sonu')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('s'));


const newString = gameName.substring(0, 4);
console.log(newString)

const anotherString =  gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "       Abhishek.      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20kumar"

console.log(url.replace('%20', '-'))
console.log(url.includes('abhishek'))
console.log(url.includes('sonu'))

console.log(gameName.split('-'));  //split the string and store it in array
