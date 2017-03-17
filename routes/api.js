var express = require('express');
var router = express.Router();
var zip = require('../controllers/zipController');

router.get('/all', zip.getZips);

router.post('/create', zip.createZip);

router.get("/search/:zip(\\d+)", zip.getZip);

router.get('/search/state/:state', zip.getStateZips);

router.get('/search/municipality/:municipality', zip.getMunicipalityZips);

router.get('/delete/:zip', zip.deleteOne);

router.get('/purgue', zip.deleteAll);

module.exports = router;
