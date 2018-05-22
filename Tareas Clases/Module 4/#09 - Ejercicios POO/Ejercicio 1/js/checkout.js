//  Puedo utilizar static para definir métodos que no necesitan de la creación de un objeto
// para llamarse sino que utilizo directamente la clase Class.method(), como por ejemplo: Math.random()

class Checkout {

  constructor(name, subtotal) {
    this._name = name;
    this._subtotal = subtotal;
    this._shipping = 0;
    this._discount;
    this._financialcost;

  }

  set subtotal(value) {
    this._subtotal = value;
  }

  set number(value) {
    this._number = value;
  }

  get subtotal() {
    return this._subtotal;
  }


  calcDiscount(percentOfDiscount) {
    let discount = this._subtotal * percentOfDiscount / 100;
    let total = this._subtotal - discount ;
    console.log("El descuento es: ", discount, "El total con descuento es: ", total)
    return discount, total;
  }

  calcCF(cuotas) {
    if (cuotas > 0 && cuotas <= 3) {
      this._financialcost = 8
    } else if (cuotas > 3 && cuotas <= 6) {
      this._financialcost = 10 //porcentaje
    } else if (cuotas > 6 && cuotas <= 12 ) {
      this._financialcost = 12
    }
    let fc = this._subtotal * this._financialcost / 100;
    console.log("El costo de financiación es: ", fc)
  }

  calcShipping(distance, weight) {
    if (distance > 20) {
      this._shipping += Math.ceil((distance - 20) / 5) * 35;
    }
    if (weight > 10)  {
      console.log(Math.ceil((weight - 10 ) / 5))
      this._shipping += Math.ceil((weight - 10 ) / 5) * 15;
    }
    return this._shipping;
  }

}
