const express = require('express');
const contact = express.Router();
const path = require('path');
const ejs = require('ejs');


contact.get('/', (req, res)=> {
  res.render(path.join(__dirname,'../views/contact.ejs'));
})








module.exports = contact;