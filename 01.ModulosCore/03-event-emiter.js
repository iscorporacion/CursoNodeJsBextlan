'use strict'

var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter()

pub.on('myevent', function(message) {
    console.log('mensaje', message);
});

pub.once('myevent', function(message) {
    console.log('se emite la primera vez');
})

pub.emit('myevent', 'soy un emisor de eventos');
pub.emit('myevent', 'soy un emisor de eventos2');