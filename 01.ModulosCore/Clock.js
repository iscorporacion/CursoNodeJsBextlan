'use strict'

class Clock {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    get clockValue() {
        return this.alto;
    }
}

module.exports = Clock