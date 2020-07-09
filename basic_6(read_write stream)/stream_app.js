const fs = require("fs");

const readStream = fs.createReadStream("./large_file.txt", "utf8");
const writeStream = fs.createWriteStream("example.txt");

readStream.on("data", (chunk)=>{
    // console.log(chunk);
    writeStream.write(chunk);
    console.log("Successfully write");
});


