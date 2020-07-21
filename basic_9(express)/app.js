const express = require("express");
const path = require("path"); // static file er jonno add korlam
const app = express(); // this method returns some functions
// and by convention the storing variable called app
// anyway go further

const bodyParser = require('body-parser'); // the body parser module



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
app.use('/public', express.static(path.join(__dirname, 'static')));
console.log(path.join(__dirname, 'static'));
// using this line we've just changed the path in client view. 
// but actually path same e ache. just client view te change dekhabe
// like, public/css/mystyle.css instead of static/css/mystyle.css
// but ekhane ekta kaaj obosshoi korte hobe
// sheta holo, html file tay css r js er location e oi directory dite
// hobe jeta virtual path hishebe use kortesi
// jemon ekhane amr folder ase static so ami jodi normally use kortam
// tahole static/css/mystyle.css dir use kortam. but ami virtual path
// jehetu use korte chacchi tai virtual path prefix tai folder er naam
// er jaygay use korte hobe. so html file e directory hobe
// /public/css/mystyle.css and /public/js/index.js
// ekhane public virtual dir er prefix tai public use korsi
// tahmid hole tahmid use kortam
// i.e /tahmid/css/mystyle.css
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

//now learn http POST
// so here we try to submit data from html form
// then we need(in thi tutorial) body-parser module
// ei module ti data parse kore dibe
//install it using 
// npm install body-parser
// after installing it, kaam shuru kor beta

app.use(bodyParser.urlencoded({extended: false}));
// ekhane ei bodyParser.urlencoded amader http url k encode kore 
// request body te set kore dibe (access with req.body)
// extended=false mean amra ekhon complicated kono object niye kaaj kortesi na
// that is, amra shudhu string niye kaaj korsi, email and password
// but beshi type er variable jodi object er property hoy then extended false
// thakbe na

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'form.html'));
});

// now post http req
app.post('/form', (req, res) => {
    console.log(req.body);
    // database works here
    res.send("Succesfully posted data");
});
// mone raakhte hobe jodi amra form theke data parse kori tahole
// obosshoi form er input er name attribute thaakte hobe
// otherwise req.body always empty object return korbe

app.listen(3000);