var mongoose = require('mongoose');
var zip = require('../models/zip');

var zipController = {}

/* createZip controller.
This controller creates a new zip code.
  * Returns 500 and error message if something goes wrong
  * Returns 200 on creation
*/
var createZip = function(req, res){
  var entry = new zip({
    zipCode: req.body.zipCode,
    state: req.body.state,
    municipality: req.body.municipality,
    settlements: req.body.settlements
  });
  entry.save(function(err, entry){
    if (err){
      res.status(500).json({'error': err}).end();
    } else {
      res.status(200).json({"Message": "Code correctly created"}).end();
    }
  });
};

/* TODO: Make the fucking controller
updateZip controller.
Update the postal code information
*/

/* getZips controller.
This controller returns all existing zip codes in the DB.
  * Returns 500 and error message if something goes wrong.
  * Returns 404 if no codes are registered.
  * Returns 200 with the codes in json format.
*/
var getZips = function(req, res){
  zip.find({}, {'_id': false, '__v': false}, function(err, codes){
    if (err) {
      res.status(500).json({'error': err}).end();
    } else {
      if (codes.length === 0) {
        res.status(404).json({"message": "No zips codes found"}).end();
      } else {
        res.status(200).json(codes).end();
      }
    };
  });
};

/* getZip controller.
This controller searc on the zip schema for any match.
 * Returns err if something goes wrong.
 * Returns 404 if the code is not found in the DB.
 * Returns 200 with the code information on json format.
*/
var getZip = function(req, res){
  zip.findOne({'zipCode': req.params.zip}, {'_id': false, '__v': false}, function(err, code){
    if (err){
      res.status(500).json({'error': err}).end()
    } else {
      if (code === null){
          res.status(404).json({"message": "code " + req.params.zip + " not found"}).end();
      }
      else {
        res.status(200).json(code).end();
      }
    }
  })
};

/* getStateZips controller.
Given a state, returns all postal codes belonging to it.
  * Returns 500 and message error if something goes wrong.
  * Returns 404 and message if no results could be found.
  * Returns 200 and codes.
*/
var getStateZips = function(req, res){
  zip.find({'state': req.params.state}, {'_id': false, '__v': false}, function(err, codes){
    if (err){
      res.status(500).json({'error': err}).end();
    } else {
      if (codes.length === 0){
        res.status(404).json({"message": "no zips codes found"}).end();
      } else {
        res.status(200).json(codes).end();
      }
    }
  });
};

/* getMunicipalityZips controller.
Given a municipality, returns all postal codes belonging to it.
  * Returns 500 and message error if something goes wrong.
  * Returns 404 and message if no results could be found.
  * Returns 200 and codes.
*/
var getMunicipalityZips = function(req, res){
  municipality = req.params.municipality.replace('-', ' ')
  zip.find({'municipality': req.params.municipality}, {'_id': false, '__v': false}, function(err, codes){
    if (err){
      res.status(500).json({"error": err}).end();
    } else {
      if (codes.length === 0) {
        res.status(404).json({"message": "no zips codes found"}).end();
      } else {
        res.status(200).json(codes).end();
      }
    }
  })
}

/* deleteOne controller.
Given a postal code, it delete it from the database.
*/
var deleteOne = function(req, res){
  zip.remove({'zipCode': req.params.zip}, function(err){
    if (err) res.status('500').json({"error": err}).end()
    res.status(200).json({"message": "code deleted correctly"}).end();
  })
}

/* deleteAll
Deletes all content in the database
  "Burn them all" - King Aerys II Targaryen.
*/
var deleteAll = function(req, res){
  zip.remove({}, function(err){
    if (err) res.status(500).json({"error": err}).end();
    res.status(200).json({"message": "codes deleted correctly"}).end();
  })
}

zipController.createZip = createZip;
zipController.getZips = getZips;
zipController.getZip = getZip;
zipController.getStateZips = getStateZips;
zipController.getMunicipalityZips = getMunicipalityZips;
zipController.deleteOne = deleteOne;
zipController.deleteAll = deleteAll;
module.exports = zipController;
