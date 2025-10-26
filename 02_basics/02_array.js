const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9]

// array1.push(array2);
// console.log(array1);

// console.log(array1[5][1]);
    
// const newArray = array1.concat(array2)
// console.log(newArray);


const all_new_array = [...array1, ...array2]
// console.log(all_new_array);

const another_array = [1, 2, 3, [4,5,6],7,8,[9,10,[11,12]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("abhishek"))
console.log(Array.from("abhishek"))   //convert string into array
console.log(Array.from({name : "abhishek"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of( score1, score2, score3))