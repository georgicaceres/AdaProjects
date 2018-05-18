// Agregar Generala Doble.
// Borrar el puntaje NO ELEGIDO
// Indicar qué jugador está activo
// Agregar indicador de estado de puntaje.
// Desabilitar el tablero del jugador no activo

const dice = ['imgs/one.png','imgs/two.png','imgs/three.png','imgs/four.png','imgs/five.png','imgs/six.png'];
const points = [20, 30, 40, 50, 60]; /////////////// acá agregué para g doble ////////
const pointsServ = [25, 35, 45, "-", "WIN"]
var player = 0;
var i;
var playerClass = ["one", "two"];
var score = [0, 0];
var finalScore = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
var chances = 3;

// Change player
function changePlayer() {
  player = (player ? 0 : 1);
  chances = 3;
  $('#diceBox').empty()
  $(".selected").removeClass("selected");
}

// --------------CHECK FIGURES (true or false)-------------- //

// Check Generala
function checkGenerala(array) {
  if (array[0] === array[4]) {
    return true
  } else {
    return false
  }
}

// Chequear Escalera
function checkEscalera(array) {
  for (i = 0; i < 4; i++) {
    if (array[i+1] - array[i] != 1) {
      return false
    }
  }
  return true
}

// Chequear Póker
function checkPoker(array) {
  if (array[0] == array[3] || array[1] == array [4]) {
    return true
  } else {
    return false
  }
}

// Check Full
function checkFull(array) {
  if (array[0] == array[1] && array[2] == array[4] || array[0] == array[2] && array[3] == array[4] ) {
    return true
  } else {
    return false
  }
};

// Check others
function checkOthers(array, index) {
  score = array.filter( (item) => item == index)
  .reduce((sum, item) => (sum + item), 0);
  // console.log(score)
  return score
}

// SCORE

// Set score
function displayScore(singles, special, servido) {
  $.each(singles, function(index, item) {
    let value = index + 1;
    $('.'+ playerClass[player]+'[data-code ='+ value +']').text(item);
  });
  $.each(special, function(index, item) {
    let value = index + 7;
    if (item == true) {
      if (servido == true) {
        $('.'+ playerClass[player]+'[data-code = '+ value +']').text(pointsServ[index]);
      } else {
        $('.'+ playerClass[player]+'[data-code = '+ value +']').text(points[index]);
      }
    } else {
      $('.'+ playerClass[player]+'[data-code = '+ value +']').text("0");
    }
  })

  for (i=0; i < 6; i++) {
    let value = i + 1;
    if (finalScore[player][i] != 0) {
      $('.'+ playerClass[player]+'[data-code ='+ value +']').text(finalScore[player][i])
    }
  };

  for (i=6; i < 11; i++) {
    let value = i + 1;
    if (finalScore[player][i] != 0) {
      $('.'+ playerClass[player]+'[data-code ='+ value +']').text(finalScore[player][i])
    }
  };

}

// Play Sound when roll dices
function playSound() {
  let rollSound = new Audio("./sounds/shake_dice.mp3");
  rollSound.play()
}

// Recreate results with only elements selected
function refreshArray() {
  results= [];
  $('#diceBox :not(.selected)').remove();
  let selected = $('#diceBox .selected');
  if (selected) {
    for (i = 0; i < selected.length; i++) {
      results.push(parseInt(selected[i].id));
    }
  }
}

// Roll n dices
function rollDice(n) {
  for (let j = 0; j < n; j++) {
    let randomValue = Math.floor(Math.random() * dice.length);
    let img= `<img id=${randomValue + 1} class='diceFace' alt='dice' src=${dice[randomValue]}>`
    $('#diceBox').append(img);
    results.push(randomValue + 1);
  };
  return results = results.sort()
}

// Evento guardar puntaje (deshabilita el radiobutton)
function setScore(idNumb) {
  console.log(idNumb)
  $('.grid'+ player +' input[data-id='+ idNumb +']:radio').attr('disabled',true);
  $('.grid'+ player +' input[data-id='+ idNumb +']:radio').next().addClass('fixed');
  $('.grid'+ player +' input[data-id='+ idNumb +']:radio').addClass('fixed');
  $('.grid'+ player +' input[data-id='+ idNumb +']:radio').prop('checked', false);
  changePlayer()
  $("#roll").prop("disabled",false);
}

// Evento "tirar dados"
$('#roll').on('click', function() {
  if (chances > 0) {
    let servido = false;
    const diceValue = [1, 2, 3, 4, 5, 6];
    let numberOfDices = 5 - $('.selected').length;
    refreshArray();
    playSound();
    rollDice(numberOfDices);
    let singles = diceValue.map(item => checkOthers(results, item));
    let special = [checkEscalera(results), checkFull(results), checkPoker(results), checkGenerala(results)];
    console.log("puntos simples:", singles, "resultado figuras:", special)
    if (chances == 3 && special.some(Boolean)) {
      servido = true;
    }
    displayScore(singles, special, servido);
  } else {
    $("#roll").prop("disabled", true);
    console.log('Elija su puntaje y presione listo')
  };
  chances--;
});

// Evento "seleccionar un dado"
$('#diceBox').on('click', '.diceFace', function() {
  $(this).toggleClass('selected');
});

//  Evento en "Listo!"
$('#ready').on('click', function() {
  console.log(player);
  let currentChecked = $('.grid'+ player +' input[name=toggle'+player+']:checked');
  console.log("Current Checked: ", currentChecked);
  if (currentChecked.length != 0) {
    let SinglePoints = currentChecked.next().text();
    console.log(SinglePoints)
    score[player] += parseInt(SinglePoints);
    console.log(score)
    let idNumb = currentChecked.data("id");
    finalScore[player][idNumb-1] = parseInt(SinglePoints); //////
    console.log(finalScore)
    console.log(idNumb)
    setScore(idNumb);
  } else {
    return
  }
});

// Tener en cuenta generala doble. Figuras servidas (suman 5 pts extras)
