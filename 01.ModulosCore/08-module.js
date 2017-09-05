'use strict'

var myData = require('./my-data');
var myClass = require('./clase');

console.log('name: ', myData.name);
console.log('email: ', myData.email);

var persona = new myClass.Persona('superman1');
persona.apellido = 'apellido';
persona.imprimir();