const fs = require("fs");

// deleting the file
fs.unlink("newExample.txt", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted. Thank you!");
    }
});