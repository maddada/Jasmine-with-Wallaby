var express = require('express');
var generator = require('./generator');
var app = express();

app.get('/', function (req, res) {
  var number = req.query.number;
  if (!number) {
    number = 1;
  }
  var helloWorldArray = generator.generateHelloWorlds(number);

  res.status(200).send(helloWorldArray);

});

app.listen(3000);
