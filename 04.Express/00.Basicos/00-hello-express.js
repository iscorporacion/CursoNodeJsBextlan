const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('<h1>Hola mundo desde Express!</h1>')
})

app.listen(3000)

console.log('Iniciando express en puerto 3000!')