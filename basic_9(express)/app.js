const express = require("express");
const path = require("path"); // static file er jonno add korlam
const app = express(); // this method returns some functions
// and by convention the storing variable called app
// anyway go further

// app.get('/', (req, res) => { // here '/' is a home route
// // that is the home page
//     res.send("Hello World");
// });

// amra onk route niye kaaj korte paari
app.get('/example', (req, res) => { // ekhane '/example' eta holo example route
    res.send("Hitting example route");
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params); // ekhane req.params holo ekta object(return a object)
    // jar properties holo name and age. to jodi nicher address ti deya hoy
    // localhost:3000/example/Tahmid/23 
    // tahole req.params Tahmid as name and 23 as a age niye nibe

    console.log(req.query); // its also return a object
    // but ager address tai jodi abr reload deya hoy ei line add er por
    // tahole ekta empty object print hobe
    // but
    // localhost:3000/example/Tahmid/23?service=own
    // then it will return a object having a single property called service
    // and its value will be 'own'
    // we can add multilple properties in query object
    // we have to put &(ampercent) between properties, like,
    // localhost:3000/example/Tahmid/23?service=own&message=ordinary king
    // output::: { service: 'own', message: 'ordinary king' }

    // res.send("example with route params"); 
    res.send("Username: " + req.params.name + "::::::::" + "Age: " + req.params.age);
    // ekhane bole rakhi sheta holo .send() method ekta callback e ek bar 
    // call kora jaabe
    // r ha send() method e string send korle shekhane new line send korle
    // new line add hobe na, so forget about the newline using .send() metho
});

// trying to send static files using express
// first of all we need path module for our flexibility
// anyway start dei :p
app.use('/public', express.static(path.join(__dirname, '/static')));
// using this line we've just changed the path in client view. 
// but actually path same e ache. just client view te change dekhabe
// like, public/css/mystyle.css instead of static/css/mystyle.css
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.listen(3000);