module.exports = (x, y, callback) => {
    if(x<0 || y<0){ //when less than then passing a error msg
        // callback has two parameters, one is the error msg
        // and one is the passing value if no error
        setTimeout(() => callback(
            new Error("The dimension is not correct"), null
        ), 2000); // 2 secs delay
    }
    else if(x===0 || y===0){ // same here
        setTimeout(() => callback(new Error("This is a line"),
        null), 2000);
    }
    else{ // but when need to pass the value, when 
        // there is no error!
        setTimeout(() => callback(null, // that is why the error section null
        {
            perimeter: () => (2*(x+y)), // these are now properties
            // of an object
            // here the value passing as an object
            area: () => (x*y)
        }), 2000);
    }
}


// this is a simple callback example
// most popularly used in Express and Mongos


// setTimeout() function e ekta node parameter hishebe
// jaabe. tai ekta node pathano hoise
// node er ekti parameter holo callback function r ekti
// holo delay time
