const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const router = express.Router();

router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req ,res) {
  res.sendFile(path.join(__dirname, "../public/signin.html"));
})
router.post('/', urlencodedParser, function(req, res) {
  let rawUsers = fs.readFileSync(path.join(__dirname, "../user.json"));
  let users = JSON.parse(rawUsers);
  let newUser = req.body;

  let userNameCheck = users.filter(el=>el.userName===newUser.userName);
  let emailCheck = users.filter(el=>el.email===newUser.email);

  if(userNameCheck.length!==0) {
    res.render('signinerr',{err:"user name already exists"});
  } else if(emailCheck.length!==0) {
    res.render('signinerr',{err:"email address already exists"});
  } else {
    users.push(newUser);
    users = JSON.stringify(users);
    res.render("signsuccess",{userName:newUser.userName});
    fs.writeFileSync(path.join(__dirname, "../user.json"), users);
  }
})










module.exports = router;