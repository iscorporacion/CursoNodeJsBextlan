'use strict'

var express = require('express'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
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
    //parse application/json
    .use(bodyParser.json())
    //parse application/x-www-form-urlencoded
    .use(bodyParser.urlencoded({ extended: fase }))
    .use(publicDir)
    //ejecutando el middlewares enrutador
    .use(routes)

module.exports = app