var express = require('express');
var logger = require('morgan');
var jade = require('jade');

var app = express();

app.use(logger('dev'));

app.use(express.static('public'))

var admin_routes = require('../app/routes/routes.back')(app);



app.set('views', './app/views/')
app.set('view engine', 'jade')

module.exports = function(){
	return app;
}