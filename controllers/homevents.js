const User = require('../models/user');
const Homevent = require('../models/homevent');


module.exports = {
  index,
  new: newHomevent,
  create,
  delete: deleteEvent,
  show
};

function create (req, res){
    const homevent = newHomevent(req.body);
    if(err) return res.redirect('/homevents/', {title: 'Add Event!'});
    homevent.save();
    console.log(homevent);
    res.redirect(`homevents/${homevents._id}`);
}

function index(req, res) {
  console.log(req.query)
  User.findOne({email: req.user.email}, function (err, profile){
      Homevent.find({}, function(err, homevents){
        res.render('homevents/index', { user: profile, title: "HoM.e Saleh Family", homevents })
      })
  })
};

function newHomevent(req, res) {
    res.render('homevents/new', { title: 'Add Location!' });
}

function show(req, res) {
    Homevent.findById(req.params.id, function(err, detail) {
        res.render('homevents/show', { title: 'Homevent Detail', detail });
      })
    };

function deleteEvent(req,res) {
  console.log(req.params.id)
  Homevent.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.error(err)
      res.send(err)
    }
    res.redirect("/homevents");
  })
};