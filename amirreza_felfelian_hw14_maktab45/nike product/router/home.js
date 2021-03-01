const express = require('express');
const home = express.Router();
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');





home.get('/', (req, res)=> {
  let data = fs.readFileSync(path.join(__dirname,'../data.json'), 'utf-8');
  data = JSON.parse(data);
  res.render(path.join(__dirname,'../views/home.ejs'), {info:data});
})









module.exports = home;