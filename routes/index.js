var express = require('express');
var router = express.Router();
var session = require('express-session');
// express.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});




module.exports = router;
