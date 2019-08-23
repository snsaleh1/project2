var mongoose = require('mongoose');

mongoose.connect(process.env,DATABASE_URL, { useNewUrlParser: true });

// shortcut to mongoose.connection object
var db = mongoose.connection;

//database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;