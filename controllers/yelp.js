const yelp = require('yelp-fusion');
const Homevent = require('../models/homevent');
const client = yelp.client(process.env.YELP_API);

module.exports = {
    yelpSearch,
    create,
    index,
}

function yelpSearch(req, res){
  const homevent = new Homevent(req.body);
  homevent.save();
    if(req.body.what === "Breakfast"){
    client.search({
      term: 'Breakfast',
      location: req.body.where,
      limit: 10
    }).then(response => {
        let result = response.jsonBody.businesses
      res.render('homevents/locations', { eventLocation: result, user: req.user, title: "Event Locations",  homevent});
    }).catch(e => {
      console.log(e);
    });
  } else if(req.body.what === "Lunch" || req.body.what === "Dinner"){
    client.search({
      term: 'Restaurant',
      location: req.body.where,
      limit: 10
    }).then(response => {
        let result = response.jsonBody.businesses
      res.render('homevents/locations', { eventLocation: result, user: req.user, title: "Event Locations",  homevent});
    }).catch(e => {
      console.log(e);
    });
  } else if(req.body.what === "Coffee"){
    client.search({
      term: 'Coffee Shop',
      location: req.body.where,
      limit: 10
    }).then(response => {
        let result = response.jsonBody.businesses
      res.render('homevents/locations', { eventLocation: result, user: req.user, title: "Event Locations",  homevent});
    }).catch(e => {
      console.log(e);
    });
  } else if(req.body.what === "Drinks"){
    client.search({
      term: 'Bar Lounge',
      location: req.body.where,
      limit: 10
    }).then(response => {
        let result = response.jsonBody.businesses
      res.render('homevents/locations', { eventLocation: result, user: req.user, title: "Event Locations",  homevent});
    }).catch(e => {
      console.log(e);
    });
  } else if(req.body.what === "Activity"){
    client.search({
      term: 'Trampoline',
      location: req.body.where,
      limit: 10
    }).then(response => {
        let result = response.jsonBody.businesses
      res.render('homevents/locations', { eventLocation: result, user: req.user, title: "Event Locations",  homevent});
    }).catch(e => {
      console.log(e);
    });
  } else if(req.body.what === "Trip"){
    client.search({
      term: 'Hotel',
      location: req.body.where,
      limit: 10
    }).then(response => {
      console.log(response);
        let result = response.jsonBody.businesses
      res.render('homevents/locations', { eventLocation: result, user: req.user, title: "Event Locations",  homevent});
    }).catch(e => {
      console.log(e);
    });
}
};

function create (req, res) {
  console.log(req.body);
  Homevent.findById(req.body.id, function(err, newEvent){
    console.log(newEvent.result);
    newEvent.result.push(req.body);
    newEvent.save(function (err, savedEvent){
      console.log(savedEvent);
      res.redirect('/homevents');
    })
  })
}

function index(req, res) {
  Homevent.find({}, function(err, Homevent) {
      res.render('homevents/index', { title: 'All Events', Homevent});
  });
}
