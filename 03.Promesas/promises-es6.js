    'use strict'

    var fs = require('fs'),
        file = './assets/nombres.txt',
        newFile = './assets/nombres-promises-es6.txt',
        promise = new Promise((resolve, reject) => {
            fs.access(file, fs.F_OK, function(err) {
                return (err) ? reject(new Error('Archivo no existe')) : resolve(true)
            })
        })
    promise
        .then((resolved, rejected) => {
            console.log('el archivo existe')
            return new Promise((resolve, reject) => {
                fs.readFile(file, function(err, data) {
                    return (err) ? reject(new Error('el archivo no se pudo leer')) : resolve(data)
                })
            })
        })
        .then((resolved, rejected) => {
            console.log('el archivo se ha leido exitosamente')
            return new Promise((resolve, reject) => {
                fs.writeFile(newFile, resolved, function(err) {
                    return (err) ? reject(new Error('el archivo no se pudo copiar')) : resolve('el archivo se ha copiado con exito')
                })
            })
        })
        .then((resolved, rejected) => {
            console.log(resolved)
        })
        .catch((err) => {
            console.log(err.message)
        })