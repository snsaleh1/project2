var express = require('express');
var router = express.Router();
var eventsCtrl = require('../controllers/events');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/events', eventsCtrl.events)

module.exports = router;
