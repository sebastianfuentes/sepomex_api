var mongoose = require('mongoose');
// TODO: Fix hardcoded connection to the database, maybe put it in other part
var connection = mongoose.createConnection("mongodb://localhost:27017/");

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String},
  email: {type: String, required: true, unique: true},
  god: {type: Boolean, default: false}
});

console.log("User schema created")
module.exports = connection.model('User', userSchema)
