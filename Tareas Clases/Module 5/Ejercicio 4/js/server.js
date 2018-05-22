var http = require('http');
var puerto = 8080;
const fs = require('fs');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('../index.html', 'utf8', function(err, data){
    res.write(data);
    res.end();
  })


}).listen(puerto, function () {

  console.log( "Escuchando en el puerto " + puerto );

});
