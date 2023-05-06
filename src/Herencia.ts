class Persona {
  public id: number;
  public edad: string;
  public nombre: string;
  public telefono: string;
  public direccion: string;
  constructor(id: number, edad: string, nombre: string, telefono: string, direccion: string) {
    this.id = id;
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;

  }

};
class Estudiante extends Persona {
  numeroMatricula: number;
  nivel: string;

  constructor(id: number, edad: string, nombre: string, telefono: string, direccion: string, numeroMaricula: number, nivel: string) {
    super(id, edad, nombre, telefono, direccion);
    this.numeroMatricula = numeroMaricula;
    this.nivel = nivel;
    
  }
  
}
function saludar(estudiante:Persona) {
document.write(" Hola mi nombre es: "+ estudiante.nombre+" tengo "+ estudiante.edad);
}
class Docente extends Persona {
  contrato: string;
  titulo: string;
  salarioBase: number;
  diasDeTrabajo: number
  horasTrabajo: number;

  constructor(id: number, edad: string, nombre: string, telefono: string, direccion: string, contrato: string, titulo: string, salarioBase: number, diasDeTrabajo: number, horasTrabajo: number) {
    super(id, edad, nombre, telefono, direccion);
    this.contrato = contrato;
    this.titulo = titulo;
    this.salarioBase = salarioBase;
    this.diasDeTrabajo = diasDeTrabajo;
    this.horasTrabajo = horasTrabajo;
  }
  calcularSalario(): number {
    const pagoPorDias = this.salarioBase / this.diasDeTrabajo;
    const pagoPorhora = pagoPorDias / this.horasTrabajo;
    return pagoPorhora
  }

}
//let estudiante = new Estudiante (45,"tecero");
//document.write(estudiante.numeroMatricula, estudiante.nivel);
//document.write(estudiante.numeroMatricula, estudiante.nivel);
//let docente = new Docente ("contrato1","ingeniero");
//document.write(docente.contrato, docente.titulo);

// let persona = new Persona(1, "20", "Alexander", "099912965", "Quitumbe");
// document.write(persona.id,persona.edad,persona.nombre,persona.telefono,persona.direccion);
let estudiante = new Estudiante(1, "20", "Alexander", "0994654", "quitumbe", 2, "tercero");
document.write("Nivel del estudiante: "+estudiante.nivel+"<br>"+ "Numero de matricula: "+estudiante.numeroMatricula.toString()+"<br>"+ "Nombre del estudiante: "+estudiante.nombre +"<br>"+"ID del estudiante "+estudiante.id.toString()+"<br>"+"Edad del estudiante: "+estudiante.edad.toString()+"<br>"+"Direccion del estudiante"+estudiante.direccion+"<br>");
saludar(estudiante)
let docente = new Docente(1, "35", "Alexander", "0999464652", "Quitumbe", "Contrato1", "ingeniero",400,30,8);
const pagoPorDia = docente.salarioBase / docente.diasDeTrabajo;
const pagoPorHora = pagoPorDia / docente.horasTrabajo;
console.log(docente.calcularSalario())
console.log("pago del docente por dia = "+pagoPorDia)
console.log("pago del docente por dia = "+pagoPorHora)



