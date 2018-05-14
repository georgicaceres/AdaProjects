
let alumno = new Alumno("Bob", "Constructor", "12-06-1995", "45674245", "")

console.log(alumno);

let materia = new Materia("Álgebra", "Lu-Mierc-Vie 08:00 a 13:00");

materia.addNota(9);

console.log(materia);

materia.addNota(10);

console.log(materia);

let promedioMateria = materia.calcularPromedio();

console.log("Promedio materia: ", promedioMateria)

alumno.addMateria(materia) //

let m2 = new Materia("Química", "Martes-Jueves 17:00 a 20:00");

m2.addNota(7);
m2.addNota(5);

alumno.addMateria(m2);

let promAlumno = alumno.calcularPromedio();

console.log("Promedio General: ", promAlumno)
