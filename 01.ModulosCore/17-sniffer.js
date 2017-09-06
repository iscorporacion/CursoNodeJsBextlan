'use strict'

var http = require('http'),
    options = {
        host: 'bextlan.com',
        port: 80,
        path: '/'
    },
    htmlCode = ''

function httpClient(res) {
    console.log(`el sitio ${options.host} ha respondido. Codigo de estado: ${res.statusCode}`)
    res.on('data', function(data) {
        htmlCode += data
        console.log(data)
    })
}

function httpError(err) {
    console.log(`el sitio ${options.host} no responde. Codigo de estado: ${err.code}. Error: ${err.message} `)
}

function webServer(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(htmlCode)
}

http
    .get(options, httpClient)
    .on('error', httpError)
http
    .createServer(webServer)
    .listen(3000)