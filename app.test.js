const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const server = require("./app");

test("Application should return HTTP 200", async () => {
    await new Promise((resolve) => {
        server.listen(0, resolve);
    });

    const port = server.address().port;

    const response = await new Promise((resolve, reject) => {
        http.get(`http://localhost:${port}`, (res) => {
            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                resolve({ statusCode: res.statusCode, body: data });
            });
        }).on("error", reject);
    });

    assert.strictEqual(response.statusCode, 200);
    assert.match(response.body, /Welcome to Lab 6!/);

    await new Promise((resolve) => server.close(resolve));
});
