var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId
// TODO: Fix hardcoded connetion to the database, maybe put it in other part
var connection = require('../config/db');

var requestedZipSchema = mongoose.Schema({
  user: {type: ObjectId, required: true},
  zip: {type: ObjectId, required: true},
  new: {type: Boolean, required: true},
  zipCode: {type: String, default: ''},
  state: {type: String, default: ''},
  municipality: {type: String, default: ''},
  settlements: {type: String, default: ''}
});

console.log("Requested Zips Schema created");
module.exports = connection.model('New', requestedZipSchema);
