var createError   = require('http-errors');
var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
const fs          = require('fs'); //Including FS -> File and Directory access operations
const mongo       = require('./config/db');
const cors        = require('cors');




var app = express();

app.use(cors());

//Connecting Mongo DB
mongo.connectFn();

//Declaring Path for Routes ,Models etc..
const routePath         = './app/routes/';
const modelPath         = './app/models';


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Boostrapping all models 
fs.readdirSync(modelPath).forEach(function(file){
  if(~file.indexOf('.js')) require(modelPath+'/'+file);
});//End of Bootstrapping models

// Bootstrapping all routes
fs.readdirSync(routePath).forEach(function(file){
  if(~file.indexOf('.js')){
      let route  = require(routePath+'/'+file);
      route.setRouter(app);
   }
});//End of Bootstrapping routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
