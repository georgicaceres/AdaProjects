let persona1 = {
  nombre: "Pepa",
  nacionalidad: "Irlandesa",
  helado: "Kiwi",
  colores: ["amarillo", "verde"]
}

let persona2 = {
  nombre: "Pepe",
  nacionalidad: "Irlandés",
  helado: "Chocolate",
  colores: ["naranja", "violeta"]
}

let personas = [];
personas.push(persona1, persona2);
let datos = {
  "users": personas,
  "cant": personas.length
};

localStorage.setItem("json", JSON.stringify(datos));
let personasJson = JSON.parse(localStorage.getItem("json"));

$.each(personasJson.users, function(index, item) {
  console.log("A " + item.nombre + " le gusta el helado de " + item.helado)
})

$.each(personasJson.users, function (index, item) {
  console.log("Los colores favoritos de " + item.nombre + " son " + item.colores[0] + " y " + item.colores[1]);
})
