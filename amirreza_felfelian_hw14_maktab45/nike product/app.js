const express = require('express');
const path = require('path');
const app = express();
const home = require('./router/home');
const about = require('./router/about');
const contact = require('./router/contact');
const shoe = require('./router/shoe');

app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'views','partialls')));


app.set('view engine', 'ejs');
app.set("views", "./views")


app.use('/home',home);
app.use('/about',about);
app.use('/contact',contact);
app.use('/shoe',shoe);



app.listen(5000,function() {
  console.log('app is running on port 5000');
})