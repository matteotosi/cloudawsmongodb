var express = require('express');
var http = require('http');
var url = require('url');
var fs = require('fs');
var app = express();
http.createServer(app).listen(80);

//ROUTES
app.get('/', function(req, res){
  res.send("Server Root");
});
app.get('/login', function(req, res){
  res.send("Login Page");
});
app.get('/save', function(req, res){
  res.send("Save Page");
});
//Query Strings Parameters
app.get('/find', function(req, res){
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.send('Finding Book: Author: ' + query.author +
           ' Title: ' + query.title);
});
//Regex Parameters
app.get(/^\/book\/(\w+)\:(\w+)?$/, function(req, res){
  res.send('Get Book: Chapter: ' + req.params[0] +
           ' Page: ' + req.params[1]);
});
//Defined Parameters
app.get('/user/:userid', function (req, res) {
  res.send("Get User: " + req.params.userid);
});
//Defined Params Callback
app.param('userid', function(req, res, next, value){
  console.log("Request with userid: " + value);
  next();
});
/*
app.all('*', function(req, res){
  // global handler for all paths
});
app.all('/user/*', function(req, res){
  // global handler for /user path
});
*/
