var mongoose = require('mongoose');
var zip = require('../models/zip');
var db = require('../utils/db');

var zipController = {}

var createZip = function(req, res){
  var entry = new zip({
    zipCode: req.body.zipCode,
    state: req.body.state,
    municipality: req.body.municipality,
    settlement: req.body.settlement
  });
  entry.save(function(err, entry){
    if (err){
      return res.status('500').json({'error': err})
    } else {
      res.send('200')
    }
  });
};

var getZips = function(req, res){
  zip.find({}, function(err, zips){
    var all = {};
    zips.forEach(function(z){
      all[z.zipCode] = z
    });
    res.send(all)
  })
};

var getZip = function(req, res){
  zip.find({'zipCode': req.body.code}, function(err, code){
    if (err){
      return res.status('400').json({'error': err})
    } else{
      console.log(code)
      res.send(code[0])
    }
  })
};

zipController.createZip = createZip;
zipController.getZips = getZips;
zipController.getZip = getZip;
module.exports = zipController;
