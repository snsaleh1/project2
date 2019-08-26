const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_API);

module.exports = {
    yelpSearch
}

function yelpSearch(req, res){
  console.log(req.body.where);
    if(req.body.what === "breakfast" || req.body.what === "lunch" || req.body.what === "dinner"){
    client.search({
      term: 'Restaurant',
      //model will be dropdown? I prefer input..(req.body.where({}))
      location: (req.body.where),
      limit: 5
    }).then(response => {
      console.log(response.jsonBody.businesses);
      let result = response.jsonBody.businesses
      res.status(200).json(result)
    }).catch(e => {
      console.log(e);
    });
  } else if(req.body.what === "coffee"){
    client.search({
        term: 'coffee shop',
        location: (req.body.where),
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