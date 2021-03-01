const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require("path");
const fs = require("fs");

router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/user:user', function(req, res) {
  let users = fs.readFileSync(path.join(__dirname,"../user.json"));
  users = JSON.parse(users);
  let myUser = users.filter(el=>el.userName === req.params.user);
  myUser[0].active = true;
  fs.writeFileSync(path.join(__dirname, "../user.json"), JSON.stringify(users))
  res.render("user", myUser[0]);
})

router.post('/user:user',urlencodedParser,  function(req ,res) {
  let users = fs.readFileSync(path.join(__dirname,"../user.json"));
  users = JSON.parse(users);
  let myUser = users.filter(el=>el.userName === req.params.user);
  console.log(myUser);
  if (myUser[0].active) {
    myUser[0].email = req.body.email;
    myUser[0].userName = req.body.userName;
    fs.writeFileSync(path.join(__dirname, "../user.json"), JSON.stringify(users));
    return res.render("user", myUser[0]);

  } else {
    return res.sendFile(path.join(__dirname, "../public/login.html"));
  }
})






module.exports = router;