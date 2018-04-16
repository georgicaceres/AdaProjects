//Crear una variable de animales
var animales = [{
  nombre : "Elefante",
  cantpatas : 4,
  alimentación : "hervíboro",
  saludar: function() {
    console.log("Hola soy un " + this.nombre);
  },
  vuela : false
}, {
  nombre : "Pato",
  cantpatas : 2,
  alimentación : "hervíboro",
  saludar: function() {
    console.log("Hola soy un " + this.nombre);
  },
  vuela : true
}, {
  nombre : "León",
  cantpatas : 4,
  alimentación : "carnívoro",
  saludar: function() {
    console.log("Hola soy un " + this.nombre);
  },
  vuela : false
}, {
  nombre : "Canguro",
  cantpatas : 2,
  alimentación : "hervíboro",
  saludar: function() {
    console.log("Hola soy un " + this.nombre);
  },
  vuela : false
}, {
  nombre : "Gaviota",
  cantpatas : 2,
  alimentación : "hervíboro",
  saludar: function() {
    console.log("Hola soy un " + this.nombre);
  },
  vuela : true
}]

  for (i=0; i < animales.length; i++) {
    if (animales[i].cantpatas ==2 && animales[i].alimentación == "hervíboro") {
        console.log( animales[i].nombre, " sube al arca.")
    } else {
        console.log(animales[i].nombre, " se ahoga en el mar.")
      }
  }
