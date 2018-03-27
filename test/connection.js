const mocha = require('mocha');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


before(function(done) {
  mongoose.connect('mongodb://localhost/store');

  //Get the default connection and bind it to a variable
  var db = mongoose.connection;
  db.once('open', function() {
    console.log('Connection Established...');
    done();
  }).on('error', function(error) {
    console.error('Connection Error:' + error);
  });
});


beforeEach(function () {
  mongoose.connection.collections.users.drop(function () {
   done();
  });
});