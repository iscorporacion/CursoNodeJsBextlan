'use strict'

var http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra')

function serverUpload(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>hola node.js</h1>')
}

http.listen(3000)

console.log('servidor corriendo')