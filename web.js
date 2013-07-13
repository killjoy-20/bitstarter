var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  String buf = fs.readFileSync("index.html");
  Buffer buff = new Buffer(buf);
  response.send(buff);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
