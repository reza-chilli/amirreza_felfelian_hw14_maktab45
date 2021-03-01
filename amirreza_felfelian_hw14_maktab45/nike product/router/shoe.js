const express = require('express');
const shoe = express.Router();
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

shoe.use(express.static(path.join(__dirname,"../views")));
shoe.use(express.static(path.join(__dirname,"../views/partialls")));


shoe.get('/:shoe',(req,res)=> {
  let data = fs.readFileSync(path.join(__dirname,'../data.json'), 'utf-8');
  data = JSON.parse(data);

  res.render(path.join(__dirname,'../views/shoe.ejs'),{shoe:data[+req.params.shoe-1]});
})









module.exports = shoe;