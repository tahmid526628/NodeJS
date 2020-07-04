const sum = (num1, num2) => (num1+ num2);
const PI = 3.1416;

class Rectangle{
    constructor(){
        console.log("This is a awesome Rectangle of 'tudut' width and 'tadat' height");
    }
}

// exports.sum = sum;
// exports.PI = PI;
// exports.Rectangle = Rectangle;

//or pass as a object
module.exports = { // here it is must to write 
    // module.exports, otherwise it will not understande
    // the object
    sum: sum,
    PI: PI,
    Rectangle: Rectangle
}