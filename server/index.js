var express = require('express');

var app = express();

app.use('/', express.static('app/'));
app.use('/bower_components', express.static('bower_components/'));

var http = require('http');

var server = http.createServer(app);

var io = require('socket.io').listen(server);

server.listen(4000);



var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false});



var tickets = [
	{
		'title': 'The network is down',
		'desc': 'The network is down and I cannot perform my work'
	},
	{
		'title': 'I lost my pen',
		'desc': 'I was near my cube when I noticed that my pen was gone.'
	}
];

app.get('/tickets', function(req, res){
	'use strict';

	res.send(tickets);
});

app.post('/tickets', jsonParser, function(req, res){
	'use strict';

	if(!req.body){
		return res.sendStatus(400);
	}
	tickets.push(req.body);

	io.emit('ticket', req.body);

	return res.sendStatus(200);
})

