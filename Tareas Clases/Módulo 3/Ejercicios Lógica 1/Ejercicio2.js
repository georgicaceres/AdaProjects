// Dada un número entre 1 y 7, devuelve el día de la semana al que corresponde.
var numero = prompt('Ingrese un número del 1 al 7')
if (numero >= 1 & numero <= 7) {
    var días = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
    console.log(días[numero-1])
} else {
  console.log('El número ingresado no corresponde')
}
