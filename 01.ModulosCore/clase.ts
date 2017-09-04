export class Persona {
    nombre: string;
    apellido: string;


    constructor(nombre: string) {
        this.nombre = nombre;
    };

    imprimir() {
        console.log(`${this.nombre} - ${this.apellido}`);
    };
}

