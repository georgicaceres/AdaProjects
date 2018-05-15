class Plato {

  constructor(type, name) {
    this._type = type;
    this._name = name;
    this._veggie;
    this._vegan;
    this._cel;
  }

  set type(value) {
    this._type = value;
  }

  set name(value) {
    this._name = value;
  }

  set veggie(value) {
    this._veggie = value;
  }

  set vegan(value) {
    this._vegan = value;
  }

  set cel(value) {
    this._cel = value;
  }
}
