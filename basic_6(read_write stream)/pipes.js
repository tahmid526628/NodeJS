const fs = require("fs");

const readStream = fs.createReadStream("./large_file.txt");
const writeStream = fs.createWriteStream("example2.txt");

readStream.pipe(writeStream);
// basically pipe() is a shorthand method to write 
// to the file by write stream
// pipe() use na korle event create kore tarpor write 
// korte hoto
// but pipe() method e event create korar dorkar hoy na
// just parameter hishebe write stream k pathalei hoy