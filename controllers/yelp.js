const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_API);

module.exports = {
    yelpSearch
}

function yelpSearch(req, res){
  console.log(req.body.where);
  console.log(req.body.what);
    if(req.body.what === "Breakfast" || req.body.what === "Lunch" || req.body.what === "Dinner"){
    client.search({
      term: 'Restaurant',
      location: req.body.where,
      limit: 5
    }).then(response => {
      console.log(response);
        let result = response.jsonBody.businesses
      res.render('homevents/locations', { eventLocation: result, user: req.user, title: "Event Locations" });
    //   res.status(200).json(result[0])
    }).catch(e => {
      console.log(e);
    });
  } else if(req.body.what === "Coffee/Drinks"){
    client.search({
        term: 'coffee shop',
        location: req.body.where,
        limit: 5
      }).then(response => {
        console.log(response.jsonBody.businesses);
        let result = response.jsonBody.businesses
        res.status(200).json(result)
      }).catch(e => {
        console.log(e);
      });
  } else if(req.body.what === "Activity"){
    client.search({
        term: 'trampoline',
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