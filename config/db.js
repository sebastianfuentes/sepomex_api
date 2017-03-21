var mongoose = require('mongoose');
var connection = mongoose.createConnection("mongodb://localhost:27017/");

module.exports = connection;