// singleton

// object literals

const JsUser = {
    name: "yash",
    age: 21,
    Location: "sikar",
    email: "yagyamishra034@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["lastLoginDays"]);
// .freeze() method is used to make an object immutable
// Object.freeze(JsUser);
JsUser.email = "yagyamishra034@gmail.com";
// console.log(JsUser.email);

JsUser.greeting = function () {
    console.log("hello js user");
}
JsUser.greetingTwo = function () {
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
