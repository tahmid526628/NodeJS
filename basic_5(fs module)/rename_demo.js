const fs = require("fs");

//renaming the file which we created in index.js
// that is the example.txt

let oldFilePath = "example.txt";

fs.rename(oldFilePath, "newExample.txt", (err) => {
    if(err){
        console.log("File not found");
    }
    else{
        console.log("Renaming successful");
    }
});


let msg = "\nThis the appending content. And its from"+
" rename_demo.js";
fs.appendFile("newExample.txt", msg, (err) => {
    if(err){
        console.log("File not found");
    }
    else{
        console.log("Appending data successful");
        //normally append korar shomoy file na peleo
        // notun file create kore then append korbe 

        //read the file after appending
        fs.readFile("newExample.txt", "utf8", (err, file) => {
            if(err){
                console.log("File not found");
            }
            else{
                console.log("File is found");
                console.log(file);
            }
        });
    }
});

