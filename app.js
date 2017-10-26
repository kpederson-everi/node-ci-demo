var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('What up?!');
});

app.listen(4000);
