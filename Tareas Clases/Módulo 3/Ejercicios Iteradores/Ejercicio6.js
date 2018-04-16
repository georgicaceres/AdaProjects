var X = ["a", "l", "f", "a"]
var Y = ["a", "l", "g", "e"]

function comparar(X,Y) {
  if (X.length != Y.length) {
    return('Los arreglos NO son iguales.')
    if (X.length > Y.length) {
      return('El arreglo X es más largo que el Y.')
    } else {
      return('El arreglo Y es más largo que el X.')
    }
  } else {
    for (i=0; X.length; i++) {
      if (X[i] != Y[i]) {
        return('La longitud de los arreglos es la misma pero los arreglos NO son iguales')
      } else {
        return('Los arreglos son iguales')
      }
    }
  }
}
