const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const path = require("path");
const fs = require("fs");

router.get('/logoutUser:user', function(req, res) {
  let users = fs.readFileSync(path.join(__dirname,"../user.json"));
  users = JSON.parse(users);
  let myUser = users.filter(el=>el.userName === req.params.user);
  myUser[0].active = false;
  users = JSON.stringify(users);
  fs.writeFileSync(path.join(__dirname,'../user.json'), users);
  res.sendFile(path.join(__dirname, '../public/login.html'));
})








module.exports = router