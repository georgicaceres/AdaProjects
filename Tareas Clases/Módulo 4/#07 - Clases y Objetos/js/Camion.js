class Camion extends Vehiculo {

  constructor (ejes)  {
    super();
    this._tara = "";
    this._altura = ""
;  }

  set tara(value) {
    this._tara = value
  }

  set altura(value) {
    this._altura = value
  }

}
