import http from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    console.log("Request:", req.url);

    if (req.url === '/') {
        res.writeHead(302, { "Location": "/products" });
        res.end();
        return;
    }

    if (req.url === '/products') {
        try {
            // 1 fetch data from external API
            const apiRes = await fetch("https://dummyjson.com/products");
            const data = await apiRes.json();

            // 2. convert data into html
            let productHTML = "";
            data.products.forEach((p) => {
                productHTML += `
                <li>
                    <h3>${p.title}</h3>
                    <img src="${p.thumbnail}" width="150" />
                </li>
                `;
            });

            // 3. read template file
            const templateFile = path.join(__dirname, 'index.html');
            let html = fs.readFileSync(templateFile, 'utf-8');

            // 4. inject data into template
            html = html.replace("{{products}}", productHTML);

            // 5. send final HTML to browser
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.writeHead(500);
            res.end("Internal Server Error");
        }
        return;
    }

    // SEND CSS
    if (req.url === "/style.css") {
        try {
            const cssFile = path.join(__dirname, "style.css");
            const css = fs.readFileSync(cssFile, 'utf-8');
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(css);
        } catch (error) {
            res.writeHead(404);
            res.end("CSS Not Found");
        }
        return;
    }

    // SEND FAVICON (Optional)
    if (req.url === "/favicon.ico") {
        res.writeHead(204); // No Content
        res.end();
        return;
    }

    // DEFAULT
    res.writeHead(404);
    res.end("404 Not Found");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});