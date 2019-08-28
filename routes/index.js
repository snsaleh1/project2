const express = require('express');
const router = express.Router();

// new code below
const passport = require('passport');
//
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homevents/index',{ title: 'HoM.e', user: req.user });
});

// Yelp api router
// router.post('/yelpSearch', searchCtrl.yelpSearch);


 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/homevents/index',
    failureRedirect: '/homevents/index'
  }
));

 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
