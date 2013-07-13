var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync("./index.html");
  console.log(buf);
  var buff = new Buffer(buf);
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
