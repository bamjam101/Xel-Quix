const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = require('./database');
const bodyParser = require("body-parser");



const dbURI = 'mongodb+srv://bamjam101:randomAccess@quimzz.r3fab.mongodb.net/quimz-db?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
        app.listen(3000);
    })
    .catch((err)=>{
        console.log(err);
    })


app.use(express.json());

// app.use(express.urlencoded({
//     extended: true
//   }))

app.use(bodyParser.urlencoded({
    extended: true
}))

//setting the view engine to use ejs templates
app.set('view engine', 'ejs');

//listening on localhost:3000

//declaring public folder as static to be accessible to the client
app.use(express.static('public'));

//rendering view template home file for event call '/'
app.get('/', (req, res)=>{
    res.render('landing', {title:"Home"});
})

//rendering view template about.ejs file for event call '/about'
app.get('/contact', (req,res)=>{
    res.render('contact', {title:"Contact"});
})

app.post("/", (req,res)=>{
    const id = req.body.quiz;
    console.log(typeof id);
    Quiz.findById(id)
        .then(result=>{
            // export default result;
            const quimz = result.q;
            console.log(result.q);
            res.render('index', {title: "Game", quimz})
        })
        .catch(err=>{
            console.log(err);
        })
})

//Sending error.ejs file when the requested url does not exist on the system.
app.use((req,res)=>{
    res.render('error', {title:"Error"});
})