var express = require('express');

var app = express();


app.get('/kek', function (req, res) {
  res.send('kek');
});

app.get('/kek/:id', function (req, res) {
  res.send('kek'+req.params.id);
});


app.listen(3001);