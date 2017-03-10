var express = require('express');
var router = express.Router();
var user = require('../controllers/userController')

router.post('/register', user.createUser);

router.get('/list', user.listUsers);

module.exports = router;
