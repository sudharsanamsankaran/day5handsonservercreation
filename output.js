var http= require("http");
var me = require('./sum');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Sum of two numbers: " + me.sum(4,9));
  res.write("to merge two arrays "+me.joinarray(["batman","superman"],["joker","bane"]));
  res.end();
}).listen(8080);