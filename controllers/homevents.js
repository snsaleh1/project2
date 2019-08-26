const User = require('../models/user');
const Homevent = require('../models/homevent');

module.exports = {
  index,
  addHomevent,
  delEvent,
  new: newHomevent,
  create,
  detail
};

function create (req, res){
    const event = newHomevent(req.body);
    if(err) return res.redirect('/homevents/new', {title: 'Add Flight'});
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
function detail(req, res) {
    Homevent.findById(req.params.id, function(err, homevents) {
        res.render('homevents/show', { title: 'Homevent Detail', homevents });
      })
    };

function delEvent(req, res, next) {

}
