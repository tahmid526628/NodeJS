const fs = require("fs");

//make a folder
fs.mkdir("habijabi", CallbackError);


function CallbackError(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successful");
    }
}