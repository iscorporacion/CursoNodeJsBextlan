'use strict'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('<h1>Hola mundo desde Express!</h1>')
})

//http://localhost:3000/user1/18
app.get('/user1/:id', (req, res) => {
    res.end(`<h1>Bienvenidos a Express! ${req.params.id}</h1>`)
})

//http://localhost:3000/user/18-jose-35
app.get('/user/:id-:name-:edad', (req, res) => {
    res.end(`
    <h1>${req.params.name}, bienvenidos a Express!, tu id es ${req.params.id} y tu edad es ${req.params.edad}</h1>
    `)
})

//http: //localhost:3000/search?s=nada+meca+kuka+mat+jue+hitler
app.get('/search', (req, res) => {
    res.end(`
    <h1>
        Bienvenidos a Express! los resultados de tu busqueda: <mark>${req.query.s}</mark>
    </h1>
    `)
})


app.listen(3000)

console.log('Iniciando express en puerto 3000!')