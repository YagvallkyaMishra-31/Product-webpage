const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log("CSR Request:", req.url);

    if (req.url === "/") {
        try {
            const htmlPath = path.join(__dirname, "../temp1/index.html");
            const html = fs.readFileSync(htmlPath);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        } catch (err) {
            console.error(err);
            res.writeHead(500);
            res.end("Error loading HTML");
        }
    } else if (req.url === "/client.js") {
        try {
            const jsPath = path.join(__dirname, "../temp1/client.js");
            const js = fs.readFileSync(jsPath);
            res.writeHead(200, { "Content-Type": "application/javascript" });
            res.end(js);
        } catch (err) {
            console.error(err);
            res.writeHead(404);
            res.end("JS not found");
        }
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

const PORT = 3003;
server.listen(PORT, () => {
    console.log(`CSR Server running on http://localhost:${3003}`);
});

