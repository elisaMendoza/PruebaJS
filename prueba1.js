// EVALUACIÓN 1- AUTOR: ELISA MENDOZA

// El CFT Estatal de la región de Valparaíso necesita crear una aplicación en Javascript que registre datos de alumnos.
// Para lograrlo debe crear un proceso iterativo que permita ingresar el nombre y apellido de un alumno en un mismo prompt, los guarde en un array y pregunte cada vez si desea ingresar un nuevo alumno.
// Luego de terminado el proceso de ingreso de alumnos, debe arrojar en la consola la información en orden alfabético.

const alumnos = []
let preguntar = true

while(preguntar) {
    let nombreCompleto = prompt("Ingrese nombre y apellido del alumno")
    alumnos.push(nombreCompleto)
    let respuesta = prompt("¿Desea ingresar un nuevo alumno? si/no: ")
    if (respuesta.toLowerCase() !== "si") {
        preguntar = false
    }

}
alumnos.sort()
console.log("El listado de los alumnos es: ")
alumnos.forEach(alumnos =>
    console.log(alumnos)
)