const express = require('express');
const UsersController = require('../controllers/UsersController');
const ItemsController = require('../controllers/ItemsController');
const CommentsController = require('../controllers/CommentsController');
const router = express.Router();


const {index, show, store, destroy, update} = UsersController;

router.get('/users', function (req, res, next) {
  index();
});

router.route('/user')
  .get(function(req, res) {
    show(req, res);
  })
  .post(function(req, res) {
    store(req, res);
  })
  .put(function(req, res) {
    update(req, res);
  })
  .delete(function(req, res) {
    destroy(req, res);
  });


router.route('/item')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  })
  .delete(function(req, res) {
    res.send('Update the book');
  });


router.route('/comment')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });



router.get('/kek', function (req, res, next) {
  User.create(req.body).then(function(user) {
        res.send(user);
  }).catch(next);
});


router.get('/kek/:id', function (req, res) {
  res.send('kek'+req.params.id);
});


module.exports = router;