var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/'));
app.get('/', function(request, response) {
    var fs = require('fs');
    var buf = new Buffer(fs.readFileSync('index.html'));
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
