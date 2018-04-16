// El juego consiste en acertar Capitales de países
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
