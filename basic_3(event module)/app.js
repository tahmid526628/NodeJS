const EventEmitter = require("events"); 
// this 'events' module is built-in
const eventEmitter = new EventEmitter();
// EventEmitter is a class
// and eventEmitter is an object of EventEmitter class

eventEmitter.on('Yeeppee', () => {
    console.log("Yeeppee event is occured");
}); // but this emitter only works when event is emit
// by the following line

eventEmitter.emit('Yeeppee');
// now the on() funtion work cause event is emitted
// the on() function has two parameter, one is event 
// as string and another is a function that is listener

//here we can pass values in the function
eventEmitter.on('Sum', (num1, num2) => {
    var sum = num1 + num2;
    console.log("Sum::: " + sum);
});
eventEmitter.emit('Sum', 5, 2);



// using a class extending EventEmitter class
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name
    }

    get name(){ //getting the name, cause _name is private
        return this._name;
    }
}

//instantiating
let tahmid = new Person("Tahmid Khandokar");
// now tahmid also has the properties of EventEmitter
let fahad = new Person("S.M. Fahad");

fahad.on('name', () => {
    console.log("Meet my friend " + fahad.name);
});

tahmid.on('name', () => {
    console.log("The OK is: " + tahmid.name);
});

tahmid.emit('name');
fahad.emit('name');

// here notice that the executeion of emit is sequence
// if I put the line fahad.emit before tahmid.emit
// then fahad.on() funtion will be executed first

// Thank you
