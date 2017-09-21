'use strict'
var express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session')

app
    .use(cookieParser())
    .use(cookieSession({ secret: "secreto", maxAge: 10000 }))
    .get('/', (req, res) => {
        req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge

        req.session.visitas || (req.session.visitas = 0)
        let n = req.session.visitas++

            res.write('<p>expires in: ' + (req.sessionOptions.maxAge / 1000) + 's</p>')
        res.end(`<h1>Hola mundo desde Express, me haz visitado ${n} veces</h1>`)
    })

app.listen(3000)

console.log('Iniciando express en puerto 3000!')