var express = require('express');
var router = express.Router();
var session = require('express-session');
// express.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


// router.post('/login', function(req, res, next){

//   const valid_user = [
//     {"id":"0","username":"toms", "password":"tom", "firstname": "tom", "lastname": "tom", "email": "tom@tom.com"},
//     {"id":"1","username":"bob", "password":"bob", "firstname": "bob", "lastname": "bob", "email": "bob@bob.com"}
//   ]
//   const username = req.body.username;
//   const password = req.body.password;

//   const found_user = valid_user.find(usr =>{
//     return usr.username == username && usr.password == password
//   });

//   if(found_user){
   
//     res.redirect('/users')

//   }else{
//     res.send("Sorry not a user")
//   }

//   console.log("Username", username)
//   // res.send(`Index Welcome ${username}`);
// })

module.exports = router;
