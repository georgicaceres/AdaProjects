var x = [10,24,36,7,98,11,14,20,98,14, 98, 10]
var max = 0
var counter = 1
for (i=0; i < x.length; i++) {
  if (x[i]>max) {
    max = x[i]
  } else if (x[i]==max) {
    counter += 1
  }
}
console.log('El valor máximo es ' + max + ' y se repite ' + counter + ' veces.')
