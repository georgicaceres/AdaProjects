class Profesor extends Persona {

  constructor (nombre, apellido, fecha, dni, sueldo) {
    super(nombre, apellido, fecha, dni);
    this._sueldo = sueldo;
  }
}
