'use strict';

var http = require('http'),
    express = require('express');
var app = express();
app.get = express('/', function(req,res) {
    res.send('Hi');
});
http.createServer(app).listen(3000);
var EventEmitter = require('events');
var eventsConfig = require('./config').events;
var hotel = require('./hotel');

var hotel1 = new hotel();

hotel1.hotels('Orchidea','Hilton','Herods');
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

/*
hotel1.on(eventsConfig.Hotel, function () {
    console.log('Ranked Hotel Is: ' + data);
});
*/