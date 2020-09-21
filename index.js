const express = require('express');
const app = express();

app.get('/', function(req, res) {
let response = { "page": "home" };
res.send(JSON.stringify(response));
});

app.get('/users/:id(\\d+)', function(req, res) {
let response = { "page": "users", "parameters": req.params };
res.send(JSON.stringify(response));
});
app.post('/users', function(req, res) {
let response = { "page": "users", "parameters": req.params };
res.send(JSON.stringify(response));
});
app.put('/users/:id(\\d+)', function(req, res) {
let response = { "page": "users", "parameters": req.params };
res.send(JSON.stringify(response));
});
app.delete('/users/:id(\\d+)', function(req, res) {
let response = { "page": "users", "parameters": req.params };
res.send(JSON.stringify(response));
});

app.get('/users/messages', function(req, res) {
let response = { "page": "messages" };
res.send(JSON.stringify(response));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});