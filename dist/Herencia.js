"use strict";
class Persona {
    constructor(id, edad, nombre, telefono, direccion) {
        this.id = id;
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}
;
class Estudiante extends Persona {
    constructor(id, edad, nombre, telefono, direccion, numeroMaricula, nivel) {
        super(id, edad, nombre, telefono, direccion);
        this.numeroMatricula = numeroMaricula;
        this.nivel = nivel;
    }
    saludar() {
        console.log("Hola mi nombre es: " + this.nombre + "tengo " + this.edad);
    }
}
;
class Docente extends Persona {
    constructor(id, edad, nombre, telefono, direccion, contrato, titulo, salarioBase, diasDeTrabajo, horasTrabajo) {
        super(id, edad, nombre, telefono, direccion);
        this.contrato = contrato;
        this.titulo = titulo;
        this.salarioBase = salarioBase;
        this.diasDeTrabajo = diasDeTrabajo;
        this.horasTrabajo = horasTrabajo;
    }
    calcularSalario() {
        const pagoPorDias = this.salarioBase / this.diasDeTrabajo;
        const pagoPorhora = pagoPorDias / this.horasTrabajo;
        return pagoPorDia;
    }
}
//let estudiante = new Estudiante (45,"tecero");
//console.log(estudiante.numeroMatricula, estudiante.nivel);
//document.write(estudiante.numeroMatricula, estudiante.nivel);
//let docente = new Docente ("contrato1","ingeniero");
//console.log(docente.contrato, docente.titulo);
// let persona = new Persona(1, "20", "Alexander", "099912965", "Quitumbe");
// console.log(persona.id,persona.edad,persona.nombre,persona.telefono,persona.direccion);
let estudiante = new Estudiante(1, "20", "Alexander", "0994654", "quitumbe", 2, "tercero");
console.log(estudiante.nivel, estudiante.numeroMatricula, estudiante.nombre, estudiante.nivel, estudiante.id, estudiante.edad, estudiante.direccion);
console.log(estudiante.saludar());
let docente = new Docente(1, "35", "Alexander", "0999464652", "Quitumbe", "Contrato1", "ingeniero", 400, 30, 8);
const pagoPorDia = docente.salarioBase / docente.diasDeTrabajo;
const pagoPorHora = pagoPorDia / docente.horasTrabajo;
console.log(docente.calcularSalario());
console.log(pagoPorDia);
console.log(pagoPorHora);
