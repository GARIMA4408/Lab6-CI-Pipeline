const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>Lab 6 CI Application</title>
            </head>
            <body>
                <h1>Welcome to Lab 6!</h1>
                <p>GitHub Actions CI Pipeline is working successfully.</p>
            </body>
        </html>
    `);
});

if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = server;