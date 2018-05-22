/* 1- Ejercicio 1: Modelar con pseudocódigo o js, la lógica de un sistema de semáforos en una esquina que consta de 2 semáforos
para vehículos y dos semáforos peatonales.
El sistema imprime el estado de los cuatro semáforos en el orden establecido.
Considera seis combinaciones posibles de los estados de cada uno, siendo estas
rojo, amarillo y verde para el semáforo de los dos vehículos y
cruzar, precaución (equivalente a titilar), no cruzar, para los
peatones.
*/
var t = 0; // Tiempo desde el comienzo del sistema
var green = '💚';
var red = '🔴';
var yellow = '🌕';

var walk = '🚶';
var warning = '⚠️';
var stop = '🚷';

// vert_car, vert_people, hor_car, hor_people

while (t <= 12) {
  switch (t % 6) {
    case 0:
      console.log(green, walk, red, stop);
      break;
    case 1:
      console.log(green, warning, red, stop);
      break;
    case 2:
      console.log(yellow, stop, red, stop);
    break;
    case 3:
      console.log(red, stop, green, walk);
      break;
    case 4:
      console.log(red, stop, green, warning);
      break;
    case 5:
      console.log(red, stop, yellow, stop);
      break;
  }
  t++;
}

// 3- Modelar con lógica y estructuras conocidas un juego de preguntas y respuestas, que conste de:
//- 3 rondas de 5 preguntas cada una.
//- Para pasar de ronda deben responderse correctamente 3 preguntas por ronda
//El juego consiste en acertar Capitales de países
var capitales = [
  ['Afganistan', 'Kabul'],
  ['Alemania', 'Berlín'],
  ['Bélgica', 'Bruselas'],
  ['China', 'Pekin'],
  ['Egipto', 'El Cairo']
]

var países = [
  ['Atenas', 'Grecia'],
  ['Montevideo', 'Uruguay'],
  ['Amnsterdam', 'Holanda'],
  ['La Paz', 'Bolivia'],
  ['Santiago', 'Chile']
]

var continentes = [
  ['Eritrea', 'África'],
  ['Camboya', 'Asia'],
  ['Kuwait', 'Asia'],
  ['Albania', 'Europa'],
  ['Palaos', 'Oceanía']
]

for (var ronda = 0; ronda < 3; ronda++) {
  var correctas = 0;
  var preguntas;
  var texto;
  switch (ronda) {
    case 0:
      preguntas = capitales;
      texto = 'Cuál es la capital de '
      break;
    case 1:
      preguntas = países;
      texto = 'En qué país queda '
      break;
    case 2:
      preguntas = continentes;
      texto = 'En qué continente queda '
  }
  for (var i = 0; i < 5; i++) {
    var respuesta = prompt( texto + preguntas[i][0] + '?')
    if (respuesta.toLowerCase() == preguntas[i][1].toLowerCase()) {
      alert('CORRECTO!')
      correctas++
    } else {
        alert('INCORRECTO. La respuesta era ' + preguntas[i][1] + '.')
    }
    if (correctas == 3) {
      if (ronda < 2)
        alert('Bravo! Pasaste a la siguiente ronda.')
      else
        alert('Enhorabuena, has ganado el juego!')
      break;


    }
  }
  if (correctas <= 2) {
    alert('Lo siento, has perdido!')
    break
  }
}

// 4- A partir del ejercicio anterior, incorporar las siguientes condiciones:
//- El valor de las respuestas correctas en la primera ronda será de 5 puntos, en la segunda 10 y en la tercera 15.
//- Al finalizar el juego se mostrará un cartel al jugador de excelente si consiguió entre 125 y 150 puntos, muy bien
//entre 100 y 124 puntos y bien para menos de 124 puntos.
var capitales = [
  ['Afganistan', 'Kabul'],
  ['Alemania', 'Berlín'],
  ['Bélgica', 'Bruselas'],
  ['China', 'Pekin'],
  ['Egipto', 'El Cairo']
]

var países = [
  ['Atenas', 'Grecia'],
  ['Montevideo', 'Uruguay'],
  ['Amnsterdam', 'Holanda'],
  ['La Paz', 'Bolivia'],
  ['Santiago', 'Chile']
]

var continentes = [
  ['Eritrea', 'África'],
  ['Camboya', 'Asia'],
  ['Kuwait', 'Asia'],
  ['Albania', 'Europa'],
  ['Palaos', 'Oceanía']
]

var puntaje = 0;

for (var ronda = 0; ronda < 3; ronda++) {
  var correctas = 0;
  var preguntas;
  var texto;
  var puntos;
  switch (ronda) {
    case 0:
      preguntas = capitales;
      texto = 'Cuál es la capital de '
      puntos = 5;
      break;
    case 1:
      preguntas = países;
      texto = 'En qué país queda '
      puntos = 10;
      break;
    case 2:
      preguntas = continentes;
      texto = 'En qué continente queda '
      puntos = 15;
  }
  for (var i = 0; i < 5; i++) {
    var respuesta = prompt( texto + preguntas[i][0] + '?')
    if (respuesta.toLowerCase() == preguntas[i][1].toLowerCase()) {
      alert('CORRECTO!')
      correctas++
    } else {
        alert('INCORRECTO. La respuesta era ' + preguntas[i][1] + '.')
    }
  }
  puntaje += (correctas * puntos)
  if (correctas <= 2) {
    alert('Lo siento, has perdido!')
    break
  } else {
    if (ronda < 2)
      alert('Bravo! Pasaste a la siguiente ronda.')
    else {
      if (puntaje >= 125) {
        alert('EXCELENTE! Has ganado con un total de ' + puntaje + ' puntos')
      } else if (puntaje >= 100 && puntaje <= 124) {
        alert('MUY BIEN! Has ganado con un total de ' + puntaje + ' puntos')
      } else {
        alert('BIEN! Has ganado con un total de ' + puntaje + ' puntos')
      }
    }
  }
}
