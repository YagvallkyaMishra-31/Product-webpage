import http from "http";
// const server = http.createServer((req, res) => {
//     res.end("Hello World YASH");
// });
const server2 = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });
    res.end(`
        <html>
            <head>
                <title>Document</title>
                <style>
                    body {
                        background-color: skyblue;
                        color: white;
                        font-size: 2rem;
                        font-weight: bold;
                        text-align: center;
                    }
                    h1 {
                        color: white;
                        font-size: 2rem;
                        font-weight: bold;
                        text-align: center;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        height: 100vh;
                    }
                    p {
                        color: white;
                        font-size: 2rem;
                        font-weight: bold;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>it is a server</h1>
                <p>Hello</p>
            </body>
        </html> 
    `);
})
server2.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000/tree")
});
