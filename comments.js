// Create web server
// Create a web server that can respond to requests for /hello and /goodbye with the appropriate text.
// Respond to all other requests with a 404 status code and the text 'Not found.'
// Listen on port 8080, so that we can test your app using the browser or curl.
// When you're done, run learnyoumongo verify program.js again to run the tests.

var express = require('express');
var app = express();

app.get('/home', function(req, res) {
  res.end('Hello World!');
});

app.get('/goodbye', function(req, res) {
  res.end('Goodbye World!');
});

app.get('*', function(req, res) {
  res.status(404).send('Not found.');
});

app.listen(8080);

