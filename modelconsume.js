
var http = require('http');
var dt = require('./mymodel');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.write("THe other function data is "+dt.myfunction());
  res.end();
}).listen(8080);
