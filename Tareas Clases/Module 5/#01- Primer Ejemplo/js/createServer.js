/** Require function allows to include modules.
* In this case we include http module.
* The function passed into the http.createServer() method,
* will be executed when someone tries to access the computer on port 8080.
**/
var http = require('http');

// Load my own module.
// var modulo = require('./modulo');

// Create server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); // The first argument is the status code,
  // 200 means that all is OK, the second argument is an object containing the response headers.
  res.write('Hola mundos!'); // write a response to the client
  res.end() // end the response

}).listen(8080); // the server object listens in port 8080
