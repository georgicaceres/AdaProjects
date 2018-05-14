// Definir cada clase en un js DISTINTO cuyo nombre sea el nombre de la classe!!


//El nombre de la clase es en SINGULAR y comienza con mayúscula!!
class Perro {
  // El constructor no puede faltar, se puede hacer de dos maneras:
//////////////////////////////////
//ASÍ:
  constructor ( x = "", y = "" ) {
    this._nombre = x;
    this._raza = y;
  }

// O ASÍ:
  // Perro ( x = "", y = "" ) {
  //   this._nombre = x;
  //   this._raza = y;
  // }
///////////////////////////////////

//SETTERS Y GETTERS!!

// Crear un método aplicable a la clase Perro
  set nombre ( value ) {
    this._nombre = value;
  }

// Retornar en formato string. Define una cadena como slaida.
  toString () {
    return this._nombre + ', ' + this._raza;
  }
}

// Creacion de objetos: Debo utilizar la palabra reservada "new". El new llama al constructor!!
let p1 = new Perro("Fido","Bull terrier");
let p2 = new Perro();


p2.toString();

console.log(p1.toString());
