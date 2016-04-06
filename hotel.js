'use strict';

var EventEmmiter = require('events');
var eventsConfig = require ('./config');

module.exports = class someHotel extends EventEmmiter {
    constructor() {
        super();
        this.hotel = 'Hotel';
        this.rank = 0;
    }

    hotels(data) {
        console.log(`${ this.hotel }: ${data}`);
        this.emit(eventsConfig.Hotel, data);
    }
    rankinc() {
        if ((this.rank >= 0) && (this.rank < 5)) {
           this.rank++;
           this.emit('rankInc'); //emit (=fire) event 
        }
        else{
            this.rank;
        }
        console.log(`${ this.rank }`);
        this.emit(eventsConfig.Hotel, this.rank);
    }

    rankdec() {
        if (this.rank <= 5) {
            this.rank = this.rank - 0.1;
        }
        if ((this.rank > 0) && (this.rank <= 4)) {
           this.rank--;
           this.emit('rankDec'); //emit (=fire) event 
        }
        else{
            this.rank;
        }
        console.log(`${ this.rank }`);
    }
    totalrank() {
        console.log(`${this.hotel} rank is: ${ this.rank }`)
    }
}



