var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Express App on Azure' });
});

/* Get Latest Date */
router.get('/date', function(req, res, next) {
  res.send(new Date()).status(200);
});

module.exports = router;
