var express = require('express');
var app = express();

//Set the application port
app.set('port', process.env.PORT || 4000);

//Set application routes
app.get('/', function(req, res){
  res.type('text/plain');
  res.send('Find Happi');
});
app.get('/signup', function(req, res){
  res.type('text/plain');
  res.send('Sign Up');
});
app.get('/signin', function(req, res){
  res.type('text/plain');
  res.send('Sign In');
});
app.get('/score', function(req, res){
  res.type('text/plain');
  res.send('Score');
});
app.get('/myaccount', function(req, res){
  res.type('text/plain');
  res.send('My Account');
});
app.get('/profile', function(req, res){
  res.type('text/plain');
  res.send('Profile');
});
//404 page
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

//500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});
