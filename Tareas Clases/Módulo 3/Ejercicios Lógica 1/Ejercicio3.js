// Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.
var mes = prompt('Ingrese un mes')
switch(mes) {
  case 'febrero':
    console.log('28 días')
    break;
  case 'noviembre':
  case 'abrl':
  case 'septiembre':
  case 'junio':
    console.log('30 días')
    break;
  default:
    console.log('31 días')
}
