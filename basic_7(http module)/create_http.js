const http = require("http");

const server = http.createServer((req, res) => {
    // res.write("Hello World from Tahmid");
    // res.end();
    if(req.url === "/"){ // '/' eta mean kore home page
    // or index page k
    // such as, ami jodi '/login' tahole login page k 
    // khujbe na pele 404
        res.write("Hello from NodeJS");
        res.end();
    }
    else{
        res.write("using other server");
        res.end();
    }
});

server.listen('3500');
