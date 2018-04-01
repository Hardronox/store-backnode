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
      available: {
        type: Boolean,
        default: false,
        coordinates: [Number] // arr of numb
      }
    });

    user.save().then(function () {
      assert(user.isNew === false);
      // done();
    });

    User.create(req.body).then(...);
    User.find('Chuck');
    User.findOne({name: 'Chuck'}).then(function (result) {
      console.log('kek');
    });
    User.findOneAndRemove({name: 'Chuck'}).then(function (result) {
      console.log('kek');
    });
    User.update({}, {$inc: {weight: 1}}).then(function (result) {
      console.log('kek');
    });
    User.findByIdAndRemove({_id: id}).then(function (result) {
      res.send(result);
      console.log('kek');
    });
    User.findOneAndUpdate({name: 'Chuck'},{name: 'Chsdfuck'}).then(function (result) {
      console.log('kek');
    });
    User.findByIdAndUpdate({name: 'Chuck'},{name: 'Chsdfuck'}, {new: true}).then(function (result) {
      console.log('kek');
    });
    User.findOne({_id: user._id}).then(function (result) {

      // toString() result._id
      console.log('kek');
    });
//   })
// });