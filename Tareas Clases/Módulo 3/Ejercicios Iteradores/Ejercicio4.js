var x = [10,24,36,7,98,11,14,20]
var max = 0
var position = 0
for (i=0; i < x.length; i++) {
  if (x[i]>max) {
    max = x[i]
    position = i
  }
}
console.log('El valor máximo es ' + max + ' y su posición es ' + position)
