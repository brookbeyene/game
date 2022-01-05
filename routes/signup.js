var express = require('express');
var router = express.Router();
var session = require('express-session');
// express().use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
 
/* GET users listing. */

router.get('/', (req, res)=> {
  res.render('login', { title: 'Login Pagesss' });
});

router.post('/', function(req, res, next){

  const valid_user = [
    {"id":"0","username":"toms", "password":"tom", "firstname": "tom", "lastname": "tom", "email": "tom@tom.com"},
    {"id":"1","username":"bob", "password":"bob", "firstname": "bob", "lastname": "bob", "email": "bob@bob.com"}
  ]
  const username = req.body.username;
  const password = req.body.password;

  const found_user = valid_user.find(usr =>{
    return usr.username == username && usr.password == password
  });

  if(!found_user){
   
      return res.status(403).json({
          message: "Wrong email or pa0000"
      })
    
  }
  req.session.username = req.body.username
    res.redirect('/users')

  console.log("Username", username)
  // res.send(`Index Welcome ${username}`);
})



module.exports = router;
