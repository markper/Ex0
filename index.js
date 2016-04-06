'use strict';

var http = require('http'),
    express = require('express');
var app = express();
var EventEmitter = require('events');
var eventsConfig = require('./config').events;
var hotel = require('./hotel');

// Hotel 1  - Orchidea
var hotel1 = new hotel('Orchidea'); // send hotel name 'Orchidea' to

hotel1.rankinc();
hotel1.rankinc();
hotel1.rankinc();
hotel1.rankinc();
hotel1.rankinc();
hotel1.rankinc();
hotel1.rankinc();
hotel1.rankdec();
hotel1.rankdec();
hotel1.rankdec();
hotel1.totalrank();

// Hotel 2 - Hilton
var hotel2 = new hotel('Hilton');

hotel2.rankinc();
hotel2.rankinc();
hotel2.rankinc();
hotel2.rankinc();
hotel2.rankdec();
hotel2.totalrank();

// Hotels Array
var hotelsArr = new Array();
hotelsArr.push(hotel1);
hotelsArr.push(hotel2);

// Listener for events
hotel1.on(eventsConfig.Hotel, function (data) {
    console.log('Ranked Hotel Is: ' + data);
});

// Server resonse
var app = express();
app.get('/', function(req,res){
	res.send("Success!");
});
http.createServer(app).listen(8080);
