const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log("SSR Request:", req.url);
    if (req.url === "/") {
        try {
            const htmlPath = path.join(__dirname, "../temp2/home.html");
            let html = fs.readFileSync(htmlPath, "utf-8");

            // SERVER-SIDE SCRIPT EXECUTION
            html = html.replace("{{username}}", "Welcome Yash");
            html = html.replace("{{technology}}", "Learning Node.js Backend");

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        } catch (err) {
            console.error(err);
            res.writeHead(500);
            res.end("Error loading HTML");
        }
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

const PORT = 8081;
server.listen(PORT, () => {
    console.log(`SSR Server running on http://localhost:${PORT}`);
});
// server side rendering means server generates full html(data) and send it to browser
// how ssr works step by step
// 1. browser requests the page
// 2. server fetches data from api
// 3. server generates full html
// 4. server sends html to browser
// 5. browser displays the page
// what is iteration in js?
// ->process where js engine goes through the code line by line and executes it
