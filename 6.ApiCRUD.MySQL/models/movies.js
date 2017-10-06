'use strict'

var mysql = require('mysql'), // node-mysql module
    myConnection = require('express-myconnection'), // express-myconnection module
    dbOptions = {
        host: 'localhost',
        port: 3308,
        user: 'admin',
        password: 'exodus',
        database: 'movies'
    },
    Movies = myConnection(mysql, dbOptions, 'single')

module.exports = Movies