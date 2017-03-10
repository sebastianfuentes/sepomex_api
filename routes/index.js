var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Códigos Postales Mexicanos' });
});

router.get('/about', function(req, res) {
  res.render('about', {title: 'Sobre mí'});
});

module.exports = router;
