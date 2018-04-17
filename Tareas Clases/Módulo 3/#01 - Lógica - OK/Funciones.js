/* 1-Escribir una función que dado un número X (base) y un número N (potencia), devuelva el resultado de realizar X^N */
function power(x, N) {
  var result = 1;
  for (var i = 0; i < Math.abs(N); i++) {
    result *= x;
  }
  if (N < 0) {
    return (1 / result);
  } else {
    return result;
  }
}
// Testing functions return what is expected
console.assert(power(5, 2) === 25, '5^2=25')  // triple igual compara que sean del mismo tipo y mismo valor
console.assert(power(3,0) === 1,'3^0=1' )
console.assert(power(4,-2) === 1/16, '4^(-2)=1/16')

/* 2-Escribir una función que, dado un número pasado como parámetro, determine si es primo. */
function prime(x) {
  if (x <= 1) {
    return false;
  } else {
    for (var i = 2; i*i <= x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.assert(prime(7), 'Seven is a prime')
console.assert(prime(2), 'Two is a prime')
console.assert(!prime(4), 'Four is not a prime')
console.assert(!prime(1), 'One is not a prime')

/* 3-Escribir una función que dada una palabra pasada por parámetro determine si es aguda, grave o esdrújula.*/
function word_type(word) {
  for (var i = word.length; i > 0; i--) {
    var tildes = 'áéíóú'
    if tildes.indexOf()
  }
}

/* 4-Escribir una función que dado un arreglo con los siguientes datos:
Corredor = { “Nombre”,”Apellido”,edad,”genero” } retorne la categoría a la cual estará anotado por ejemplo:
F 18 – 25, M 18 – 25*/
var corredor = ["Juan", "Perez", 23, "M"];
function category(corredor) {
  if (corredor[2] <= 18) {
    categoria = "Cadetes";
  } else if (corredor[2] >18 & corredor[2] < 25) {
    categoria = "Juveniles";
  } else {
    categoria = "Mayores";
  }
  console.log("La categoría es '" + corredor[3] + "-" + categoria + "'");
}
