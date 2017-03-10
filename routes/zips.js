var express = require('express');
var router = express.Router();
var zip = require('../controllers/zipController');

router.get('/', zip.getZips);

router.post('/', zip.createZip);

router.get('/:zip', zip.getZip);

router.get('/:state', zip.getStateZips);

router.get('/:municipality', zip.getMunicipalityZips);

router.get('/delete/:zip', zip.deleteOne);

router.get('/delete', zip.deleteAll);

module.exports = router;
