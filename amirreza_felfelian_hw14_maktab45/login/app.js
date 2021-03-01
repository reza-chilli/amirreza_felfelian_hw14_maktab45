const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
const loginPage = require('./router/login');
const signinPage = require('./router/signin');
const user = require('./router/user');
const logout = require('./router/logout')

app.set('view engine', 'ejs');
app.set("views", "./views");

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'./views')));

app.use('/login',loginPage);
app.use('/signin',signinPage);
app.use('/users',user);
app.use('/logout',logout);





app.listen(8080, function() {
  console.log("server is running on port 8080....");
})