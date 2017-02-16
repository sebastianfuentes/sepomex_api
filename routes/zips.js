var express = require('express');
var router = express.Router();
var zip = require('../controllers/zipController');

router.get('/', zip.getZips);

router.post('/', zip.createZip);

router.get('/:zip', zip.getZip);

module.exports = router;
