var mongoose = require('mongoose');
var zipRequest = require('../models/zipRequest')

var zipRequestController = {}

/* createRequest controller.
This controller creates a zip request.
  * Returns 500 and error message if something goes wrong.
  * Returns 200 on success
*/
var createRequest = function(req, res){
  var entry = new Zip({
    user: req.body.user,
    zip: req.body.zip,
    new: req.body.new,
    zipCode: req.body.zipCode,
    state: req.body.state,
    municipality: req.body.municipality,
    settlements: req.body.settlements
  });
  entry.save(function(err, response){
    if (err){
      res.status(300).json({'error': err}).end();
    } else {
      res.status(200).json({"Message": "Correctly created the zip request"});
    }
  });
}
