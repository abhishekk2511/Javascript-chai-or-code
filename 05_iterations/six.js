const coding  = ["js", "ruby", "py", "java", "CPP"]

const values  = coding.forEach( (item, index) => {
    // console.log(item, index);
})
// console.log(values);


// filter in javaScript

const myNums = [1,2,3,4,5,6,7,8,9,10]


//  const newNum = myNums.filter( (num) => num > 4 )
// console.log(newNum);



// we started a scope , now we have  to use a return keyword

// const newNum = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNum);

const myNums1 = [1,2,3,4,5,6,7,8,9,10]
const myNums2 = []

myNums.forEach( (num) => {
    if(num > 4){
        myNums2.push(num)
    }
})

// console.log(myNums2);


// object

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter( (bk) => (bk.genre === "Science"))

// when we declared a scope in a foreach loop, we have to use return keyword
userBooks = books.filter( (bk) => {
    return  bk.publish >= 1995  && bk.genre === 'History'   //gives you filter
})

  console.log(userBooks);s

