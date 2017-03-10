var mongoose = require('mongoose');
// TODO: Fix hardcoded connection to the database, maybe put it in other part
var connection = mongoose.createConnection("mongodb://localhost:27017/");

var zipSchema = mongoose.Schema({
  zipCode: {type: String,
            required: true,
            unique: true},
  state: {type: String,
          required: true},
  municipality: {type: String,
                 required: true},
  settlements: [{type: String, required: true}]
});

console.log("Zip Schema created")
module.exports = connection.model('Zip', zipSchema)
