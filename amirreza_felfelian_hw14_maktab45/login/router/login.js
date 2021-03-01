const express = require("express");
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require("fs");

router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../public/login.html'));
})
router.post('/', urlencodedParser, function(req ,res) {
  let users = fs.readFileSync(path.join(__dirname, "../user.json"));
  users = JSON.parse(users);
  let checkUserName = users.filter(el=>el.userName===req.body.userName);
  console.log(checkUserName);
  if(checkUserName.length===0 || checkUserName[0].Password!==req.body.Password) {
    res.render("loginErr", {err:"user name does not exist or password is incorrect"});
  } else {
    checkUserName[0].active = true;
    users = JSON.stringify(users)
    fs.writeFileSync(path.join(__dirname, '../user.json'), users);
    res.render("user", checkUserName[0]);
  }
})
router.post('/changePassword:user', urlencodedParser, function(req ,res) {
  let users = fs.readFileSync(path.join(__dirname, "../user.json"));
  users = JSON.parse(users);
  let myUser = users.filter(el=>el.userName===req.params.user);
  myUser[0].Password = req.body.Password;
  myUser[0].active = false;
  fs.writeFileSync(path.join(__dirname, "../user.json"), JSON.stringify(users));
  return res.sendFile(path.join(__dirname, "../public/login.html"));
})











module.exports = router;