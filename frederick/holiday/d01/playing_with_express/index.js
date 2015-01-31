'user strict';

var express = require('express');
var app = express();
var name;

app.get('/', function(req, res) {
	res.send("Hello " + name);
});

app.post('/', function(req, res)) {
	name = req.params.name;
	res.send("Name set");
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})