'use strict'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/assets/index.html`)
})

app.listen(3000)

console.log('Iniciando express en puerto 3000!')