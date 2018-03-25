const assert = require('assert')
const User = require('../models/user')



describe('saving records', function () {


  it('saves new user',function (done) {

    var user = new User({
      firstName: 'String',
      lastName: 'String',
      email: 'String',
      password: 'String',
    });

    user.save();
  })
});