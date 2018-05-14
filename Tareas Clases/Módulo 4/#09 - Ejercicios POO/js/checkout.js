class Checkout {

  constructor(name, number) {
    this._name = name,
    this._number
  }

  set name(value) {
    this._name = value;
  }

  set number(value) {
    this._number = value;
  }

  get name() {
    return this._name;
  }

  get number() {
    return this._number;
  }

  calcDiscount() {

  }
}
