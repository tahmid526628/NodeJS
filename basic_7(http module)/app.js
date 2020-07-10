const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // const readStream = fs.createReadStream("./index.html");
    // res.writeHead(200, {"Content-type": "text/html"});
    // const readStream = fs.createReadStream("./example.json");
    // res.writeHead(200, {"Content-type": "application/json"});
    const readStream = fs.createReadStream("./pika.png");
    res.writeHead(200, {"Content-type": "image/png"});
    readStream.pipe(res);
});

server.listen(3500);




// ekhane 200 ta holo request returning code mean that 
// all are ok 
// like 404 is representation of file not found