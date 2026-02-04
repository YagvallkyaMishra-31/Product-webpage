const { useCallback } = require("react");

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task is created");
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("promise consumed");
});
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("task three");
        resolve({ name: "yash", city: "delhi" });
    }, 2000);
});

promiseThree.then(function (user) {
    console.log(user);
});
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "yash", email: "yagyamishra034@gmail.com" });
        } else {
            reject("Something went wrong");
        }
    }, 1000);
});
promiseFour
    .then(function (user) {
        console.log(user);
        return user.username;
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    });
// diff between prmoises and callback 
// callback:-hard error handling and messy code 
// promise:- better error handling and clean code 
function fetch(url) {
    // browser starts HTTP request in background (Web API's)
    // when response comes
    resolve(responseObject)
    // or if network fails
    reject(error)
}
fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
});
