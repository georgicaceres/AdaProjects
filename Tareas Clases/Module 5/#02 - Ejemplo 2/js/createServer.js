var http = require('http');
var port = 8080;
// var mimodulo = require('./modules/functions')


http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});



  res.write('?');

  res.end()

}).listen(port);
