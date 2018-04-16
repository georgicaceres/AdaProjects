var letra = prompt('Ingrese una letra')
var vocales = "aeiou"
if (vocales.indexOf(letra.toLowerCase()) != -1) {
  console.log('Vocal')
} else {
  console.log('No es vocal')
}
