const express = require('express');
const router = express.Router();
const homeventsCtrl = require('../controllers/homevents');
// var searchCtrl = require('../controllers/yelp');


router.get('/', function(req, res, next) {
  res.redirect('/homevents/index');
});
router.get('/index', homeventsCtrl.index);
router.get('/new', homeventsCtrl.new);
router.post('/locations', homeventsCtrl.create);
router.get('/:id', homeventsCtrl.show)



module.exports = router;
