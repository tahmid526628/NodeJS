const fs = require("fs");
const zlib = require("zlib"); // for using compressing the data

const gzip = zlib.createGzip(); // for creating a zip
const readStream = fs.createReadStream("./large_file.txt");
const writeStream = fs.createWriteStream("example2.txt.gz");

readStream.pipe(gzip).pipe(writeStream);
// it's called pipe chaining. 
// ekhane gzip read stream theke data chunk akare read kore
// write stream k use kore ekta compressed version create korbe
// ekhetre example2.txt er that is txt file er type change korte hobe
// type .txt er por .gz add korte hobe,
// i.e. example2.txt.gz