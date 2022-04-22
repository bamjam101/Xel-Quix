const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const model = require('./database');

const dbURI = 'mongodb+srv://bamjam101:J%40msha2156@quimzz.r3fab.mongodb.net/quimzz?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then((result)=>{
        console.log('connected');
    })
    .catch((err)=>{
        console.log(err);
    })

app.use(express.json());

//setting the view engine to use ejs templates
app.set('view engine', 'ejs');

//listening on localhost:3000
app.listen(3000);

//declaring public folder as static to be accessible to the client
app.use(express.static('public'));

//rendering view template home file for event call '/'
app.get('/', (req, res)=>{
    res.render('index', {title:"Home", quizChoice: 'Some choices of quiz in form of array'});
})

//rendering view template about.ejs file for event call '/about'
app.get('/contact', (req,res)=>{
    res.render('contact', {title:"Contact"});
})

//Sending error.ejs file when the requested url does not exist on the system.
app.use((req,res)=>{
    res.render('error', {title:"Error"});
})