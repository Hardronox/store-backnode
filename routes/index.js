const express = require('express');
const router = express.Router();


router.get('/kek', function (req, res) {
  res.send('kek');
});

router.get('/kek/:id', function (req, res) {
  res.send('kek'+req.params.id);
});


module.exports = router;