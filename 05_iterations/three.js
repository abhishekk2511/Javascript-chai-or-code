const map = new Map() 

map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr', "France")

// console.log(map)

// forOf loop

for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObj = {
    game1 : 'IGI',
    game2 : 'POP'
}

for (const [key, value] of myObj) {
    console.log(key, value);
    
}