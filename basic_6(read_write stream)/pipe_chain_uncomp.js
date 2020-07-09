const fs = require("fs");
const zlib = require("zlib"); // for using compressing the data

const gunzip = zlib.createGunzip(); // for creating a zip
const readStream = fs.createReadStream("example2.txt.gz");
const writeStream = fs.createWriteStream("example2_uncompress.txt");

readStream.pipe(gunzip).pipe(writeStream);
// it's called pipe chaining. 
// ekhane gunzip read stream theke data chunk akare read kore
// write stream k use kore ekta uncompressed version create korbe
