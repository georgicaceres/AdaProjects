function prime(x) {
  if (x <= 1) {
    return false
  } else {
    for (var i = 2; i*i <= x; i++) {
      if (x % i === 0) {
        return false
      }
    }
    return true
  }
}

console.assert(prime(7), 'Seven is a prime')
console.assert(prime(2), 'Two is a prime')
console.assert(!prime(4), 'Four is not a prime')
console.assert(!prime(1), 'One is not a prime')
