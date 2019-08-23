const express = require('express');
const router = express.Router();
// new code below
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homevents', { title: 'Express', user: req.user });
});

 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/homevents/index',
    failureRedirect: '/'
  }
));

 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
