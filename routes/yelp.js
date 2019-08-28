var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/yelp');


router.post('/', searchCtrl.yelpSearch);
router.get('/', searchCtrl.index);

module.exports = router;
