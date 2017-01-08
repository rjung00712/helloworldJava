/**
 * Created by Richard on 1/7/17.
 */
var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.8081/');