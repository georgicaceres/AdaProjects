function power(x, N) {
  var result = 1
  for (var i = 0; i < Math.abs(N); i++) {
    result *= x
  }
  if (N < 0) {
    return (1 / result)
  } else {
    return result
  }
}

// Testing functions return what is expected
console.assert(power(5, 2) === 25, '5^2=25')  // triple igual compara que sean del mismo tipo y mismo valor
console.assert(power(3,0) === 1,'3^0=1' )
console.assert(power(4,-2) === 1/16, '4^(-2)=1/16')
