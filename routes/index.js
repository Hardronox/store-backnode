const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/kek', function (req, res, next) {
  User.create(req.body).then(function(user) {
        res.send(user);
  }).catch(next);
});

router.get('/kek/:id', function (req, res) {
  res.send('kek'+req.params.id);
});


module.exports = router;