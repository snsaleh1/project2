const User = require('../models/user');
const Homevent = require('../models/homevent');

module.exports = {
  index,
  new: newHomevent,
  create,
  delete: deleteEvent
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

// function show(req, res) {
//     Homevent.findById(req.params.id, function(err, Homevent) {
//         res.render('homevents/show', { title: 'Homevent Detail', Homevent });
//       })
//     };

function deleteEvent(req,res) {
  Homevent.findByIdAndRemove(req.params.id, function(err, deletedEvent) {
    if (err) {
      console.error(err)
      res.send(err)
    }
    console.log(req.params.id, deletedEvent);
    res.redirect("/homevents");
  })
}