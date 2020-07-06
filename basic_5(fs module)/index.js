const fs = require("fs");

// create file
fs.writeFile("example.txt", "This is an Example and "
+ "it will be write on the file. Taadaaaa", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File successfully created!");

        //read the file
        fs.readFile("example.txt", "utf8", (err, file) => {
            // jodi file ta error function er
            // body te print korte chai tahole callback
            // function e 2 ta parameter hobe
            // 1 ta err r second ta file
            if(err){
                console.log("File not found");
            }
            else{
                console.log("File found");
                console.log(file);
                //with just two parameter in .readFile()
                // it will print out the buffer string
                // like, <Buffer 54 68 69 73 20 69 73 20 61 6e 20 45 78 61
                // 6d 70 6c 65 20 61 6e 64 20 69 74 20 77 69 6c 6c 20 62 65 20 77 72 69 74 65 20 6f 6e 20 74 68 65 20 66 69 6c ... 11 more bytes>
                // not the encoded version
                // so we have to put another parameter
                // to get the correct output
                // we have to put a second parameter
                // between filaPath and callback
                // the parameter is "utf8"
            }
        });
    }
});