const User = require('../models/user');

// get all
function index(req, res) {
  User.create(req.body).then(function(user) {
    res.send(user);
  }).catch(next);
}

// store 1
function store(req, res) {
  User.create(req.body).then(function(user) {
    res.send(user);
  }).catch(next);
}

// get 1
function show(req, res) {
  User.create(req.body).then(function(user) {
    res.send(user);
  }).catch(next);
}

// update 1
function update(req, res) {
  User.create(req.body).then(function(user) {
    res.send(user);
  }).catch(next);
}

// delete 1
function destroy(req, res) {
  User.create(req.body).then(function(user) {
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