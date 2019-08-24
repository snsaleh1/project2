const User = require('../models/user');

module.exports = {
  index,
  addEvent,
  delEvent,
  newEvent
};

function index(req, res, next) {
  console.log(req.query)
  User.find({email: req.user.email}, function (err, profile){
      res.render('homevents/index', { user: profile, title: "HoM.e Saleh Family" })
  });
}

function newEvent(req, res) {
    res.render('homevents/new', { title: 'Add Event!' });
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
