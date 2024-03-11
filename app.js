let http = require("http");
const PORT = 8080;

let app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World\n");
});

app.listen(PORT, () => {
    console.log("====================================== ");
    console.log("🚀 Server is running on port " + PORT);
    console.log("====================================== ");
});
