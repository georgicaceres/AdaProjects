let carro = new Checkout("Georgi", 1000);
console.log(carro)

let shipping = carro.calcShipping(22,12);
console.log(shipping)

let disc = carro.calcDiscount(10);

let fc = carro.calcCF(12);
