var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Set the application port
app.set('port', process.env.PORT || 4000);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

//Set application routes
app.get('/', function(req, res){
  res.render('home');
});
app.get('/signup', function(req, res){
  res.render('signup');
});
app.get('/signin', function(req, res){
  res.render('signin');
});
app.get('/score', function(req, res){
  res.render('score');
});
app.get('/myaccount', function(req, res){
  res.render('myaccount');
});
app.get('/profile', function(req, res){
  res.render('profile');
});
app.get('/editprofile', function(req, res){
  res.render('editprofile');
});
app.get('/usernumber', function(req, res){
  res.render('usernumber');
});
app.get('/forgotlogin', function(req, res){
  res.render('forgotlogin');
});
//404 page
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

//500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});
