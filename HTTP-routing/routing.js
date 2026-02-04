import http from "http";
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Home page");
    }
    else if (req.url === '/about') {
        res.end("About page");
    }
    else if (req.url === '/contact') {
        res.end("Contact page");
    }
    else {
        res.statusCode = 404;
        res.end("404 Not Found");
    }

});
server.listen(3000, () => {
    console.log("Server running on port 3000 on: http://localhost:3000");
});

