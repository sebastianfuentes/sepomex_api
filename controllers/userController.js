var mongoose = require('mongoose');
var user = require('../models/user');

var userController = {}

/* createUser controller.
This controller allows user to register.
NOTE: Administrators must be created only from the DB.
*/
var createUser = function(req, res){
  var entry = new user({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  entry.save(function(err, entry){
    if (err){
      res.status(300).json({'error': err}).end();
    } else{
      res.status(200).json({"Message": "User correctly created"}).end()
    }
  })
}

/* listUsers controller
This controller lists all users, it'll require to be administrator to execute this.
TODO: Add admin validation hehe xd
*/
var listUsers = function(req, res){
  user.find({}, function(err, users){
    if (err){
      res.status(500).json({'error': err}).end();
    } else {
      res.status(200).json(users).end();
    }
  });
}

userController.createUser = createUser;
userController.listUsers = listUsers;
module.exports = userController;
