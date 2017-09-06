'use strict'

var http = require('http'),
    options = {
        host: 'bextlan.com',
        port: 80,
        path: '/'
    }

http
    .get(options, function(res) {
        console.log(`el sitio ${options.host} ha respondido. Codigo de estado: ${res.statusCode}`)
    })
    .on('error', function(err) {
        console.log(`el sitio ${options.host} no responde. Codigo de estado: ${err.code}. Error: ${err.message} `)
    })