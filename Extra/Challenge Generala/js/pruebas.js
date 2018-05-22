var results = [1, 2, 2, 5, 5];

let noSelected = $('#diceBox :not(.selected)');
if (noSelected) {
  for (i=0; i < noSelected.length; i++) {
    for (j=0; j < results.length; j++) {
      if (noSelected[i].id == results[j]) {
        results.splice(j, 1);
        break
      }
    }
  }
}


// Opción 1
// function checkOthers(array, index) {
//   var newList = array.reduce((groups, n) => {
//     let key = n == index ? 'yes' : 'no';
//     (groups[key] = groups[key] || []).push(n);
//     return groups;
//   }, {});
//   // console.log(newList)
// }
//
// for (i=1; i<7; i++) {
//   checkOthers(results, i);
// }
//
// // Opción 2
// function check(array, index) {
//   let score = results.filter( (item) => item == index)
//   .reduce((sum, item) => (sum += item), 0);
//   return score
// }
//
// var singles = {
//   one: check(results,1),
//   two: check(results,2),
//   three: check(results,3),
//   four: check(results,4),
//   five: check(results,5),
//   six: check(results,6),
// }
//
// console.log(singles)


for (i=0; i < 6; i++) {
  let value = i + 1;
  if (finalScore[player][i] != 0) {
    $('.'+ playerClass[player]+'[data-single ='+ value +']').text(item)
  }
};

for (i=6; i < 11; i++) {
  let value = i + 1;
  if (finalScore[player][i] != 0) {
    $('.'+ playerClass[player]+'[data-spec ='+ value +']').text(item)
  }
});




var dice = ['imgs/one.png','imgs/two.png','imgs/three.png','imgs/four.png','imgs/five.png','imgs/six.png'];
var player = 0;
var i;
var playerClass = ["one", "two"];
var points = [20, 30, 40, 50];
var scoreArray = [0, 0];
var results = [];
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

// --------------CHECK DICES END-------------- //

// Set score
function displayScore(singles, special) {
  $.each(singles, function(index, item) {
    let value = index + 1;
    $('.'+ playerClass[player]+'[data-single ='+ value +']').text(item);
    if (item != 0) {
      // console.log(playerClass[player])
    }
  });
  $.each(special, function(index, item) {
    let value = index + 1;
    if (item == true) {
      $('.'+ playerClass[player]+'[data-spec = '+ value +']').text(points[index]);
    }
  })
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
    console.log(results)
  }
}

// Tirar n cantidad de dados
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
  console.log("estoy acá")
  console.log(idNumb)
  $('.grid'+ player +' input[data-id='+ idNumb +']:radio').attr('disabled',true);
  $('.grid'+ player +' input[data-id='+ idNumb +']:radio').next().addClass('fixed');
  changePlayer()
  $("#roll").prop("disabled",false);
}

// Evento "tirar dados"
$('#roll').on('click', function() {
  if (chances > 0) {
    let diceValue = [1, 2, 3, 4, 5, 6];
    let numberOfDices = 5 - $('.selected').length;
    refreshArray();
    playSound();
    rollDice(numberOfDices);
    console.log(results);
    let singles = diceValue.map(item => checkOthers(results, item));
    let special = [checkEscalera(results), checkFull(results), checkPoker(results), checkGenerala(results)];
    console.log("puntos simples:",singles, "resultado figuras:",special)
    displayScore(singles,special);
  } else {
    $("#roll").prop("disabled",true);
    console.log('Elija su puntaje y presione listo')
    // changePlayer()
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
  let currentChecked = $('.grid'+ player +' input:checked');
  console.log("Current Checked: ", currentChecked);
  let points = currentChecked.next().text();
  console.log(points)
  score[player] += parseInt(points);
  let idNumb = currentChecked.data("id");
  console.log(idNumb)
  setScore(idNumb);
});
