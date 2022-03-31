const express = require('express');
const app = express();

//setting the view engine to use ejs templates
app.set('view engine', 'ejs');

//listening on localhost:3000
app.listen(3000);

//declaring public folder as static to be accessible to the client
app.use(express.static('public'));

//rendering view template home file for event call '/'
app.get('/', (req, res)=>{
    res.render('index.ejs');
})

//rendering view template about.ejs file for event call '/about'
app.get('/contact', (req,res)=>{
    res.render('contact.ejs');
})

//Sending error.ejs file when the requested url does not exist on the system.
app.use((req,res)=>{
    res.render('error.ejs');
})