var rect = require("./rectangle.js");

function solveRect(l, b){
    console.log("The input is " + l + " and " +b);

    rect(l, b, (error, rectangle) => {
        if(error){
            console.log("Error::: " + error);
        }
        else{
            console.log("Congrats! You've given correct input.");
            console.log("Area::: " + rectangle.area());
            console.log("Perimeter::: " + rectangle.perimeter());
        }
    });

    console.log("This is after calling rect()");
}

solveRect(2, 5);
solveRect(0, 10);
solveRect(5, -2);
solveRect(7, 4);


//ekhane ekta delay diye output gulo show hocche
// r er moddhe onno kaaj hoye jaache 
// jmon last consol er line ti(line: 17)

// simple example of callback and error handling
// normally amra jokhon database theke data retrieve 
// ba jokhon amon hobe j kono kaaj ektu delay diye kore
// er maajhe onno kaaj korte hobe tokhon callback use
// kora jaay. ekhetre setTimeout() ba setInterval()
// use korte hobe