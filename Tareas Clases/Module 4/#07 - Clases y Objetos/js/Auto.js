class Auto extends Vehiculo {

  /**
  *   Constructor
  *
  **/
  constructor (marca, modelo, año, patente, color)  {
    super(marca, modelo, año, patente);
    this._color = color;
    this._velocidad;
  }

  // Getters and Setters

  // Setters no son obligatorios para poder modificar los valores de algún atributo.

  set marca(value) {
    this._brand = value;
  }

  set modelo(value) {
    this._model = value;
  }
  set año(value) {
    this._year = value;
  }

  set patent(value) {
    this._patent = value;
  }

  set color(value) {
    this._color = value
  }

  get marca() {
    return this._brand;
  }

  get modelo() {
    return this._model;
  }
  get año() {
    return this._year;
  }

  get patent() {
    return this._patent;
  }

  frenar() {
    this._velocidad = 0;
  }

  acelerar() {

  }

}
