const User = require('../models/user');
const Homevent = require('../models/homevent');

module.exports = {
  index,
  addHomevent,
  new: newHomevent,
  create,
  show
};

function create (req, res){
    const event = newHomevent(req.body);
    if(err) return res.redirect('/homevents/', {title: 'Add Event!'});
    res.redirect(`homevents/${homevents._id}`);
}

function index(req, res, next) {
  console.log(req.query)
  User.find({email: req.user.email}, function (err, profile){
      res.render('homevents/index', { user: profile, title: "HoM.e Saleh Family" })
  });
}

function newHomevent(req, res) {
    res.render('homevents/new', { title: 'Add Location!' });
  }

function addHomevent(req, res, next) {
  req.user.homevents.push(req.body);
  req.user.save(function(err) {
    if(err) return next(err);
    res.redirect('/homevents');
  });
}
function show(req, res) {
    Homevent.findById(req.params.id, function(err, homevents) {
        res.render('homevents/show', { title: 'Homevent Detail', homevents });
      })
    };


