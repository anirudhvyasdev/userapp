var express = require('express');
var app = express();
var mongoose = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;
