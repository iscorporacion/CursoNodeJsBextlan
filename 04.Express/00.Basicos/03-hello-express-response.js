'use strict'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('<h1>Hola mundo desde Express!</h1>')
})


app.get('/bextlan', (req, res) => {
    res.redirect(301, 'http://bextlan.com')
})

app.get('/json', (req, res) => {
    res.json({
        name: "kuka",
        age: 31,
        mail: "nada@gmail.com"
    })
})

app.get('/render', (req, res) => {
    res.render('./assets/index.html')
})

app.listen(3000)

console.log('Iniciando express en puerto 3000!')