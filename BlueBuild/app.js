var createError = require('http-errors');
var express = require('express');
var path = require('path');


var app = express();

// view engine setup

app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;