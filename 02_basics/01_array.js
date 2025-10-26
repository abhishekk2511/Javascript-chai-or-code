// ARRAYS

const myArray = [1,2,3,4,5]
// console.log(myArray)
// console.log(myArray[4])

myArray.push(6)
myArray.push(7) 
// console.log(myArray)

myArray.pop()
// console.log(myArray)

myArray.unshift(9)  //add the element at the front of the array
// console.log(myArray);

myArray.shift()  //like a pop operation, remove element from front
// console.log(myArray)

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();   //this convert the array into string format

// console.log(myArray)
// console.log(newArray)

// console.log(typeof newArray)  //gives string

// SLICE , SPLICE

console.log("A ", myArray);

const myarr1 = myArray.slice(1,3)   // does not include the 3rd index element
console.log(myarr1);
console.log("B after Slice ", myArray);//slice does not removes the slice part from original array, original array remains same    

const myarr2 = myArray.splice(1,3) // it include the 3rd index element
console.log(myarr2)
console.log("C after Splice ", myArray);  //splice removes the splice part from original arrat







