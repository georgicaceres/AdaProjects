//Ejercicios iteradores

//1 - Cargar de forma automática incremental, un array de números a partir de un largo dado por el usuario.
var longitud = prompt('Ingrese la longitud del array deseada')
var array = [];
for (i = 0; i < longitud; i++) {
  array[i] = i;
  console.log(array[i]);
}

//2 - Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares y un valor que coincida con el índice
//en las posiciones impares.
var longitud = prompt('Ingrese la longitud del array deseada')
var array = [];
for (i = 0; i < longitud; i++) {
  if (i % 2 == 0) {
    array[i]=0;
  } else {
    array[i]=i;
  }
  console.log(array[i]);
}

//3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por pantalla el valor máximo.
var x = [10,24,36,7,98,11,14,20];
var max = 0;
for (i = 0; i < x.length; i++) {
  if (x[i] > max) {
    max = x[i];
  }
}
console.log(max);

// 4 - Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su posición.
var x = [10,24,36,7,98,11,14,20];
var max = 0;
var position = 0;
for (i = 0; i < x.length; i++) {
  if (x[i] > max) {
    max = x[i];
    position = i;
  }
}
console.log('El valor máximo es ' + max + ' y su posición es ' + position);

// 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10], mostrar por pantalla el valor máximo y la cantidad de veces que se repite.
var x = [10,24,36,7,98,11,14,20,98,14, 98, 10];
var max = 0;
var counter = 1;
for (i = 0; i < x.length; i++) {
  if (x[i] > max) {
    max = x[i];
  } else if (x[i] == max) {
    counter += 1;
  }
}
console.log('El valor máximo es ' + max + ' y se repite ' + counter + ' veces.')

/* 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común*/
var X = ["a", "l", "f", "a"];
var Y = ["a", "l", "g", "e"];

function comparar(X, Y) {
  if (X.length != Y.length) {
    return('Los arreglos NO son iguales.');
    if (X.length > Y.length) {
      return('El arreglo X es más largo que el Y.');
    } else {
      return('El arreglo Y es más largo que el X.');
    }
  } else {
    for (i = 0; X.length; i++) {
      if (X[i] != Y[i]) {
        return('La longitud de los arreglos es la misma pero los arreglos NO son iguales');
      } else {
        return('Los arreglos son iguales');
      }
    }
  }
}

/* 7 – Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] y datos2 = [“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
• ¿Cuál de los dos personajes es más viejo?
• ¿Cuál de los dos personajes está casado?
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el monto a cobrar? */
var datos1 = ["Fido","Gomez", 26, 15000.78, true]
var datos2 = ["Gervasio", "Fernandez", 32, 28550, false]
function comparar(datos1, datos2) {
  if (datos1[2] > datos2[2]) {
    console.log("El más viejo es " + datos1[0] + " " + datos1[1])
  } else {
    console.log("El más viejo es " + datos2[0] + " " + datos2[1])
  }

  if (datos1[4] & datos2[4]) {
    console.log("Ambos están casados!");
  } else {
    if (datos1[4]) {
      console.log(datos1[0] + " " + datos1[1] + " está casado.")
    }
    else if (datos2[4]) {
      console.log(datos2[0] + " " + datos2[1] + " está casado.")
    } else {
      console.log("Ninguno está casado")
    }
  }

  datos1[3] += (12 / 100 * datos2[3]);
  console.log("El monto a cobrar por Fido es de " + datos1[3]);
}
