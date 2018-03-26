const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var mongoDB = 'mongodb://localhost/store';

before(function(done) {
  mongoose.connect(mongoDB, {
    useMongoClient: true
  });
  //Get the default connection and bind it to a variable
  var db = mongoose.connection;
  db.once('open', function() {
    console.log('Connection Established...');
    done();
  }).on('error', function(error) {
    console.error('Connection Error:' + error);
  });
});