// object Singleton
// const tinderUser = new Object()  //create an object

const tinderUser = {}   //create an object

tinderUser.id = "123abc"
tinderUser.name = "abhishek"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const anotherUser = {
    email : "some@gmail.com",
    userName : {
        userFullName : {
            firstName : "Abhishek",
            lastName : "Kumar"
        }
    }
}
// console.log(anotherUser.userName);

// console.log(anotherUser.userName.userFullName.firstNameName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}


// combine the object into one
const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const array = [
    {
        name: "Abhi",
        url : "2344"
    },
    {
        name: "Abhi",
        url : "2344"
    },
    {
        name: "Abhi",
        url : "2344"
    },
    {
        name: "Abhi",
        url : "2344"
    }
]

// console.log(array[1].name);
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// ******JSON VIDEO*******

const course = {
    courseName : "JavaScript",
    price : "999",
    student : "Abhishek"
}

// course.courseName

const {courseName} = course
console.log(courseName)

// JSON
 
// API Format

// {
//     name : "Abhishek",
//     courseName : "JS",
//     price : "Free"

// }

//array ke andar Objects 
// [
//     {},
//     {},
//     {}
// ]