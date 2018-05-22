let nombre = "Pepe";
let apellido = "Fernández"
let materias = ['matemática', 'física', 'química', 'historia'];

let datos = {
  "name": nombre,
  "apellido": apellido,
  "materias": materias
};

localStorage.setItem("alumno", JSON.stringify(datos));
