'use strict'

var express = require('express'),
    favicon = require('serve-favicon'),
    jade = require('jade'),
    routes = require('./routes/index'),
    faviconURL = `${__dirname}/public/img/node-favicon.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express()

app
//configurando app
    .set('views', viewDir)
    .set('view engine', 'jade')
    .set('port', port)
    //ejecutando middlewares
    .use(favicon(faviconURL))
    .use(publicDir)
    //ejecutando el middlewares enrutador
    .use('/', routes)

module.exports = app