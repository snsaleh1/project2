const express = require('express');
const router = express.Router();
const homeventsCtrl = require('../controllers/homevents');


/* GET family events page/logged-in page listing. */
router.get('/', function(req, res, next) {
  res.redirect('/homevents/index');
});

router.get('/index', homeventsCtrl.index);

module.exports = router;
