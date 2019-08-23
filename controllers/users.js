const User = require('../models/user');

module.exports = {
    index,
    addEvent
};


function index(req, res, next) {
    console.log('hello dammit');
    console.log(req.query)
res.render('homevents/index', { 
    users, 
    user:req.user, 
    name: req.query.name, 
    sortKey });
};

  function addEvent(req, res, next) {
    req.user.events.push(req.body);
    req.user.save(function(err) {
      res.redirect('/homevents');
    });
  }