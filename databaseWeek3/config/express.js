var express = require('express');
var logger = require('morgan');
var jade = require('jade');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var admin_routes = require('../app/routes/routes.back')(app);



app.set('views', './app/views/')
app.set('view engine', 'jade')

module.exports = function(){
	return app;
}