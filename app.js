var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');

var usersRouter = require('./routes/users');
var functions = require('./functions.js')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/users', usersRouter);

// var router = express.Router();

/* GET home page. */
app.use('/square/:number', function(req, res, next) {  
  let number = Number(req.params.number);
  res.json({"square": functions.square(number)});
});

app.use('/identity/:number', function(req, res, next) {  
    let number = Number(req.params.number);
    res.json({"identity": functions.identity(number)});
});

console.log("Running");

module.exports = app;
