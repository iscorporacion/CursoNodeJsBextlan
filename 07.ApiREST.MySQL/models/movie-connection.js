'use strict'

var mysql = require('mysql'), // node-mysql module
    dbOptions = {
        host: 'localhost',
        port: 3308,
        user: 'admin',
        password: 'exodus',
        database: 'movies'
    },
    myConnection = mysql.createConnection(dbOptions)

myConnection.connect((err) => {
    return (err) ? console.log(`Error al conectar a mysql: ${err.stack}`) : console.log(`conexion establecida con mysql n°: ${myConnection.threadId}`)
})
module.exports = myConnection