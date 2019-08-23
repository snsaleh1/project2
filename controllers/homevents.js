const User = require('../models/user');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with User.find based on
  // the user has submitted the search form or now
  User.find({email: req.user.email}, function (err, profile){
      res.render('/homevents/index', { profile })
  });
}



function addFact(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    if(err) return next(err);
    res.redirect('/students');
  });
}

function delFact(req, res, next) {

}
