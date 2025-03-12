// Create web server
// Create a web server that listens for requests on port 8080 and responds with a JSON object. The JSON object should have a key comments that contains an array of strings. The array should have at least 3 strings.

const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({comments: ['string1', 'string2', 'string3']}));
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});