
// iteration in objects, forin loop

const myObj = {
    game1 : 'IGI',
    game2 : 'POP',
    game3 : 'NFS',
    game4 : 'BL2'
}


for (const key in myObj) {
    // console.log(key);
} 


for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
} 

const prog = ["cpp", "java", "rb", "js", "py"]

for (const key in prog) {    
    // console.log(key);
    
}



// for in loop used for object to iterate them



// foreach loop used in functions to iterate them
const coding  = ['js', 'py', 'rb', 'cpp', 'java']
coding.forEach(function (val) {
    // console.log(val)    
});


coding.forEach((item)  => {
    // console.log(item);
});

coding.forEach((item, index, Array) => {
    // console.log(item, index, Array);
    
});


// array ke andar objects
const myCoding = [
    {
        langName : "CPP",
        price : 999
    },
    {
        langName : "js",
        price : 999
    },
    {
        langName : "py",
        price : 999
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
})

