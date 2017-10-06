'use strict'

var express = require('express'),
    router = express.Router()

function jade(req, res, next) {
    let locals = {
        title: 'Jade2',
        link: 'http://jade-lang.com/',
        descripcion: 'descripcion de jade por parametro'
    }
    res.render('index', locals)
}

router
    .get('/', (req, res) => {
        res.end('<h1>Terminamos la configuraci&oacute;n de nuestra app</h1>')
    })
    .get('/jade', jade)

module.exports = router