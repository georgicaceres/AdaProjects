
var bloques = [ {
    color: "rojo",
    longitud: 2,
    ruedas: true,
    cantidad: 2
  },
  {
    color: "rojo",
    longitud: 2,
    ruedas: false,
    cantidad: 8
},
{
  color: "amarillo",
  longitud: 1,
  ruedas: false,
  cantidad: 3
},
{
  color: "naranja",
  longitud: 1,
  ruedas: false,
  cantidad: 3
},
{
  color: "violeta",
  longitud: 3,
  ruedas: false,
  cantidad: 2
},
{
  color: "verde",
  longitud: 3,
  ruedas: false,
  cantidad: 2
}]

var cantBloques = 20;

function torre(bloques) {
  var torre = [];
  var ancho = 6;
  for (var i=1; i < bloques.length; i++) {
    var cantBloques = bloques[i].cantidad;
    var longTorre = cantBloques * bloque[i].longitud;
    while (longTorre <= ancho) {
      if (bloques[i].longitud == 2) {
        torre.push = bloques
    }
    }

  }
}
