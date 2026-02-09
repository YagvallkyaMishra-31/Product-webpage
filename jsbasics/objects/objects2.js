// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "yash"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmmail.com",
    fullName: {
        userfullname: {
            firstName: "yash",
            lastName: "mishra"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstName);
// this fullname inside is an object
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
// const obj3 = { ...obj1, ...obj2 }
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const users = [
    {
        id: 1,
        name: "yash"
    },
    {
        id: 2,
        name: "yash@"
    },
    {
        id: 3,
        name: "yash1"
    }
]
// console.log(users[1].name);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "yash"
}
// console.log(course.courseInstructor);
// destructuring
// courseName: name is used to rename the courseName to name
const { courseName: name } = course
console.log(name);
// {
//     name:"yash",
//     price:"999",
//     courseInstructor:"yash"
// }
[
    {},
    {},
    {}
]