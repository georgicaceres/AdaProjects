// El juego consiste en acertar preguntas de Geografía.
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
