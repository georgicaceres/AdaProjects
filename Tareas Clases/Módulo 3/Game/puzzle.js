var piezas = [ 3, 2, 4, 1, 6 ,5];
var fila1 = [];
var fila2 =[];

function armar(piezas) {
  for (var i = 0; i < piezas.length; i++) {
      if (piezas[i] <=3) {
        fila1.push(piezas[i]);
        console.log(piezas[i])
      } else {
        fila2.push(piezas[i]);
      }
  }
  fila1.sort();
  fila2.sort();
  var puzzleListo = fila1 +' , ' + fila2;
  console.log(puzzleListo);
}

armar(piezas);
