// import global modules
var path = require('path');

//import npm modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//import from app-specific modules
var route = require('./route');

// set server options
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set bodyParser to parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set the static dirs
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

// set the routes
app.get('/', route.index);
app.post('/', route.post);
app.get('/receipt', route.receipt);

// start server
var server = app.listen(app.get('port'), function(err) {
   if(err) throw err;

   var message = 'Server is running @ http://localhost:' + server.address().port;
   console.log(message);
});
