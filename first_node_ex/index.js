var rect = require("./rectangle.js");

function findArea(l, b){
    // console.log("Yeeee");
    if(l<0 || b<0){
        console.log("Please enter correct one");
    }
    else if(l===0 || b===0){
        console.log("It's a line");
    }
    else{
        console.log("Perimeter: " + rect.perimeter(l, b));
        console.log("Area: " + rect.area(l, b));
    }
}

findArea(2, 5);
findArea(0, 5);
findArea(3, -1);
findArea(5, 4);