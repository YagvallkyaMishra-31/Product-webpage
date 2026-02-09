// Stack(primitive),Heap(non-primitive)
// null datatype is an object
let name = "yash"
let anothername = name
anothername = "mishra"
console.log(anothername);
console.log(name);
let userOne = {
    email: "yash@gmail.com",
    password: "1234"
}
let userTwo = userOne
userTwo.email = "rohit@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
