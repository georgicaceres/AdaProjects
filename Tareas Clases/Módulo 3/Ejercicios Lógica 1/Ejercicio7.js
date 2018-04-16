var antiguedad = prompt('Ingrese la antiguedad del trabajador')
var sueldo = 40000
if (antiguedad >= 10) {
  sueldo *= 1.1
} else if (antiguedad <10 & antiguedad >= 5) {
  sueldo *= 1.07
} else if (antiguedad <5 & antiguedad >=3) {
  sueldo *= 1.05
} else {
  sueldo  *= 1.03
}
