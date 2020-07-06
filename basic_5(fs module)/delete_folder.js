const fs = require("fs");

//delete folder
fs.rmdir("habijabi", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Successful");
    }
});


// jodi folder vitor kono file thake tahole error show
// korbe. tai age folder er vitor file delete kore
// then folder delete korte hobe
// er jonno rmdir() korar age unlink() korte hobe

