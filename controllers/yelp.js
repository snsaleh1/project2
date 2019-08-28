const yelp = require('yelp-fusion');
const Homevent = require('../models/homevent');
const client = yelp.client(process.env.YELP_API);

module.exports = {
    yelpSearch,
    create,
    index
}

function yelpSearch(req, res){
  console.log(req.body.where);
  console.log(req.body.what);
  const homevent = new Homevent(req.body);
  homevent.save();
    if(req.body.what === "Breakfast" || req.body.what === "Lunch" || req.body.what === "Dinner"){
    client.search({
      term: 'Restaurant',
      location: req.body.where,
      limit: 10
    }).then(response => {
      console.log(response);
        // Result.push(req.body.result);
        let result = response.jsonBody.businesses
      res.render('homevents/locations', { eventLocation: result, user: req.user, title: "Event Locations",  homevent});
    //   res.status(200).json(result[0])
    }).catch(e => {
      console.log(e);
    });
  } else if(req.body.what === "Coffee/Drinks"){
    client.search({
        term: 'coffee shop',
        location: req.body.where,
        limit: 10
      }).then(response => {
        console.log(response.jsonBody.businesses);
        let result = response.jsonBody.businesses
        res.status(200).json(result)
      }).catch(e => {
        console.log(e);
      });
  } else if(req.body.what === "Activity"){
    client.search({
        term: 'trampoline park',
        location: req.body.where,
        limit: 5
      }).then(response => {
        console.log(response.jsonBody.businesses);
        let result = response.jsonBody.businesses
        res.status(200).json(result)
      }).catch(e => {
        console.log(e);
      });
  }
};

function create (req, res) {
  console.log(req.body);
  Homevent.findById(req.body.id, function(err, newEvent){
    console.log(newEvent);
    newEvent.result.push(req.body);
    newEvent.save(function (err, savedEvent){
      res.redirect('/homevents');
    })
  })
}

function index(req, res) {
  Homevent.find({}, function(err, Homevent) {
      res.render('homevents/index', { title: 'All Events', Homevent});
  });
}