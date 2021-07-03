var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   //response.end('Hello World - CHANGED BY ANSIBLE PLAYBOOK\n')
   response.end('Hello World - CHANGED BY ANSIBLE PULL v4\n')
}).listen(3000)

// Console will print the message
console.log('Server running')
