var mongoose = require('mongoose');

var zipSchema = mongoose.Schema({
  zipCode: Number,
  state: String,
  municipality: String,
  settlement: String
})

module.exports = mongoose.model('ZIPS', zipSchema)
