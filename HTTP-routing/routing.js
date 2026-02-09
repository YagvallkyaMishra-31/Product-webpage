import http from "http";
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("Home page");
//     }
//     else if (req.url === '/about') {
//         res.end("About page");
//     }
//     else if (req.url === '/contact') {
//         res.end("Contact page");
//     }
//     else {
//         res.statusCode = 404;
//         res.end("404 Not Found");
//     }

// });
// server.listen(3000, () => {
//     console.log("Server running on port 3000 on: http:localhost:3000");
// });
// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         res.end("Fetching Data");
//     }
//     else if (req.method === 'POST') {
//         res.end("Creating Data");
//     }
//     else if (req.method === 'PUT') {
//         res.end("Updating Data (Full Update)");
//     }
//     else if (req.method === 'PATCH') {
//         res.end("Updating Data (Partial Update)");
//     }
//     else if (req.method === 'DELETE') {
//         res.end("Deleting Data");
//     }
//     else {
//         res.statusCode = 404;
//         res.end("404 Not Found");
//     }

// });
// server.listen(3000, () => {
//     console.log("Server running on port 3000 on: http://localhost:3000");
// });
let users = [
    { id: 1, name: "Ankit" },
    { id: 2, name: "Rohit" }
];

function getRequestBody(req) {
    return new Promise((resolve) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            resolve(JSON.parse(body));
        });
    });
}

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json");

    // GET → Fetch all users
    if (req.url === "/users" && req.method === "GET") {
        res.end(JSON.stringify(users));
    }

    // POST → Create new user
    else if (req.url === "/users" && req.method === "POST") {
        const data = await getRequestBody(req);

        const newUser = {
            id: users.length + 1,
            name: data.name
        };

        users.push(newUser);
        res.end(JSON.stringify(newUser));
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
