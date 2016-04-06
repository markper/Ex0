'use strict';

var EventEmmiter = require('events');
var eventsConfig = require ('./config');

module.exports = class someHotel extends EventEmmiter {
    constructor(data) {
        super();
        this.hotel = data;
        this.rank = 0;
    }
// rank is between 0 to 5
    rankinc() { // ranking up
        if ((this.rank >= 0) && (this.rank < 5)) {
           this.rank++;
           this.emit(eventsConfig.data,'rankInc'); //emit (=fire) event
        }
        else{
            this.rank;
        }
        console.log(`${ this.rank }`);
        this.emit(eventsConfig.data, this.rank);
    }

    rankdec() {  // ranking down (if between 5 to 4 decreament in 0.1)
        if ((this.rank <= 5) && (this.rank > 4)) {
            this.rank = this.rank - 0.1;
        }
        if ((this.rank > 0) && (this.rank <= 4)) {
           this.rank--;
           this.emit(eventsConfig.data, 'rankDec'); //emit (=fire) event 
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



