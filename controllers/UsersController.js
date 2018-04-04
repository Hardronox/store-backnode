const User = require('../models/user');

// get all
function index(req, res, next) {
  User.find().then(function(result) {
    console.log(result);
    res.send(result);
  }).catch(next);
}

// store 1
function store(req, res, next) {
  console.log(req.body);
  User.create(req.body).then(function(user) {
    res.send(user);
  }).catch(next);
}

// get 1
function show(req, res, next) {
  User.findById(req.params.id).then(function(user) {
    res.send(user);
  }).catch(next);
}

// update 1
function update(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body).then(function(user) {
    res.send(user);
  }).catch(next);
}

// delete 1
function destroy(req, res, next) {
  User.findByIdAndRemove(req.params.id).then(function(user) {
    res.send(user);
  }).catch(next);
}


module.exports = {
  index,
  store,
  show,
  update,
  destroy,
};