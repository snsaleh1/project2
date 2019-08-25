const express = require('express');
const router = express.Router();
const homeventsCtrl = require('../controllers/homevents');

router.get('/', function(req, res, next) {
  res.redirect('/homevents/index');
});
router.get('/index', homeventsCtrl.index);
router.get('/new', homeventsCtrl.index);
// router.get('/:id', homeventsCtrl.show);
// router.post('/', homeventsCtrl.create);



module.exports = router;
