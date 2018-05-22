class Materia {

  constructor (nombre, horarios) {
    this._nombre = nombre;
    this._horario = horarios;
    this._notas = [];
  }

  set nombre(value) {
    this._nombre = value;
  }

  set horarios(value) {
    this._nombre = value;
  }

  addNota(nota) {

    this._notas.push(nota);
  }

  calcularPromedio() {
    let largo = this._notas.length;
    let total = 0
    for (let i=0; i < largo; i++ ) {
      total += this._notas[i]
    }
    let promedio = total/largo;
    return promedio
  }

}
