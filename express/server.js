import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("hello world");
})

// router
app.get("/users", (req, res) => {
    res.send("User List");
});

app.post("/users", (req, res) => {
    res.send("Create user");
});

app.listen(3005, () => {
    console.log("server started on http://localhost:3005");
})



// 200 success
// 1. 200 ok
// 2. 201 created
// 400 client error
// 1. 401 unauthorized
// 2. 403 forbidden
// 500 server error
// 1. 500 internal server error
// 2. 502 bad gateway