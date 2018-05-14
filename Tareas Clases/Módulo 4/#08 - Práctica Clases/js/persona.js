class Persona {

  constructor (nombre, apellido, fecha, dni) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._fechaNac = fecha;
    this._dni = dni
  }

  set nombre(value) {
    this._nombre = value;
  }

  set apellido(value) {
    this._nombre = value;
  }

  set fehcaNac(value) {
    this._fechaNac = value;
  }

  set dni(value) {
    this._dni = value;
  }

  get nombre() {
    return this._nombre
  }

  get apellido() {
    return this._apellido
  }

  get fechaNac() {
    return this._fechaNac
  }
  get dni() {
    return this._dni
  }

}
