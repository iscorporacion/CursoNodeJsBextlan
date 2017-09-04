'use strict'

function singleThread() {
    console.log('El proceso de node');
    console.log('id del proceso: ' + process.pid);
    console.log('titulo: ' + process.title);
    console.log('version de node: ' + process.version);
}

singleThread()