const User = require('../models/user');

module.exports = {
  index,
  addEvent,
  delEvent
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with User.find based on
  // the user has submitted the search form or now
  User.find({email: req.user.email}, function (err, profile){
      res.render('homevents/index', { user: profile, title: "HoM.e Saleh Family" })
  });
}



function addEvent(req, res, next) {
  req.user.homevents.push(req.body);
  req.user.save(function(err) {
    if(err) return next(err);
    res.redirect('/homevents');
  });
}

function delEvent(req, res, next) {

}
