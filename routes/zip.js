var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/buscar', function(req, res, next){
  if (req.query.zip){
    request('http://localhost:3000/api/search/'+req.query.zip, function(err, response, body){
      if (err){
        res.send(err)
      } else{
        res.render('details', {title: req.query.zip, information: JSON.parse(body)});
      }
    });
  } else {
    res.send("No Object could be retreat")
  }
});

module.exports = router;
