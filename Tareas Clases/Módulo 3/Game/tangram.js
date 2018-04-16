var camtPiezas = 7;
var piezas [{
  name: "triangulo",
  lados: [2, 1, 1],
},
{
  name: "triangulo",
  lados: [2, 1, 1],
},
{
  name:"triangulo",
  lados: [1, 1, 4/3]
  cantidad: 1
},
{
  name: "cuadrado",
  lados: [1/2],
  cantidad: 1
},
{
  name: "triangulo",
  lados: [1/2, 1/2, 1],
  cantidad: 2,
},
{
  name: "paralelogramo",
  lados: [1, 1/2, 1, 1/2]
}]

function triangleToSquare() {
  for (var i=0; i < piezas.length, i++) {
    for (var j=0; j < piezas.length, j++) (
      if (piezas[j].name == piezas[i].name & piezas[j].lados == piezas[i].lados) {
        var newSquare = {name: square, lados: piezas[i].lados.min}
        piezas.push(newSquare)
        
      }
    )
  }
}
