//Ejercicios de lógica condicional – Parte 1

//1- Dada una variable x, determinar si es par o impar.
var x = prompt('Ingrese un número');
if (x % 2 == 0) {
  console.log('El número es par');
} else {
  console.log('El número es impar');
}

//2- Dada una variable y que puede contener un número de 1 a 7, determinar a que día de la semana corresponde.
//Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).
var numero = prompt('Ingrese un número del 1 al 7');
if (numero >= 1 & numero <= 7) {
    var días = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
    console.log(días[numero-1]);
} else {
  console.log('El número ingresado no corresponde');
}

//3- Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.
var mes = prompt('Ingrese un mes');
switch(mes) {
  case 'febrero':
    console.log('28 días')
    break;
  case 'noviembre':
  case 'abrl':
  case 'septiembre':
  case 'junio':
    console.log('30 días')
    break;
  default:
    console.log('31 días')
}

//4- Dados un número, determinar si es positivo o negativo.
var numero = prompt('Ingrese un número');
if (numero > 0) {
  console.log('El número es positivo.');
} else if (numero < 0) {
  console.log('El número es negativo.');
} else {
  console.log('El número ingresado es cero.');
}

//5- Dada una variable que puede ser una letra, determinar si es una vocal.
var letra = prompt('Ingrese una letra')
var vocales = "aeiou"
if (vocales.indexOf(letra.toLowerCase()) != -1) {
  console.log('Vocal')
} else {
  console.log('No es vocal')
}

//6- Dados tres números: x y z, si x es mayor que y calcular la resta entre x y z,
// Determinar si eso es mayor que y, de lo contrario sumar x y z (x+z) y multiplicarlo por y.
var x = prompt('Ingrese un número')
var y = prompt('Ingrese otro número')
var z = prompt('Ingrese un tercer número')
if (x > y) {
   var result = x - z
    if (result > y) {
      console.log(result +  ' es mayor que ' + y)
    }
  } else {
  console.log((x + z)* y)
  }

//7--Calcule el sueldo que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales.
// Se deben realizar los cálculos en función de los siguientes criterios:
//a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
//b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
//c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
//d. Si lleva menos de 3 años se le aplica un aumento del 3%
var antiguedad = prompt('Ingrese la antiguedad del trabajador')
var sueldo = 40000
if (antiguedad >= 10) {
  sueldo *= 1.1
} else if (antiguedad <10 & antiguedad >= 5) {
  sueldo *= 1.07
} else if (antiguedad <5 & antiguedad >=3) {
  sueldo *= 1.05
} else {
  sueldo  *= 1.03
}
