const express = require('express');
const about = express.Router();
const path = require('path');
const ejs = require('ejs');


about.get('/', (req, res)=> {
  res.render(path.join(__dirname,'../views/about.ejs'));
})







module.exports = about;