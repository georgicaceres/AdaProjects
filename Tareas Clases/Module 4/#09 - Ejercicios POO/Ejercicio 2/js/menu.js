class Menu {

  constructor() {
    this._price = 250;
    this._first;
    this._second;
    this._dessert;
    this._drink;
  }

  set first(value) {
    this._first = value;
  }

  set second(value) {
    this._second = value;
  }

  set dessert(value) {
    this._dessert = value;
  }

  set drink(value) {
    this._drink = value;
  }

  get first(value) {
    return this._first
  }

  get second(value) {
    return this._second
  }

  get dessert(value) {
    return this._dessert
  }

  get drink(value) {
    return this._drink
  }

}
