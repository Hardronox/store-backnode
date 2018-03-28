const assert = require('assert')
const User = require('../models/user')



// describe('saving records', function () {
//
//
//   it('saves new user',function (done) {

    var user = new User({
      firstName: 'String',
      lastName: 'String',
      email: 'String',
      password: 'String',
    });

    user.save().then(function () {
      assert(user.isNew === false);
      // done();
    });

    User.find('Chuck');
    User.findOne({name: 'Chuck'}).then(function (result) {
      console.log('kek');
    });
    User.findOne({_id: user._id}).then(function (result) {

      // toString() result._id
      console.log('kek');
    });
//   })
// });