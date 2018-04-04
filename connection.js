const mocha = require('mocha');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/store');

//Get the default connection and bind it to a variable
var db = mongoose.connection;
db.once('open', function() {
  console.log('Connection Established...');
}).on('error', function(error) {
  console.error('Connection Error:' + error);
});

