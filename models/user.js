var mongoose = require('mongoose');
var connection = require('../config/db');
// TODO: Fix hardcoded connection to the database, maybe put it in other part

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String},
  email: {type: String, required: true, unique: true},
  god: {type: Boolean, default: false}
});

console.log("User schema created")
module.exports = connection.model('User', userSchema)
