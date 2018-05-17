var data;
var answerCounter = {};

// Check if already exists the answer in answerCounter. That means somebody vote this before.
function checkAnswer(answer, question) {
  let index;
  function test(item, ind) {
    if (item.name == answer) {
      index = ind;
      return true;
    } else {
      return false;
    }
  }
  if (!answerCounter[question]) answerCounter[question] = [];
  if (answerCounter[question].some(test)){
    return index;
  } else {
    return -1;
  };
}

// Function add vote
function addVote(question, answer) {

};

// Get votes
function getVote(question, answer) {
  return 5;
};

$( document ).ready(function() {
  $.ajax({
    method: "GET",
    url: "http://www.mariabelenalegre.com/api-encuenta/api.php"
  })

  .done(function (response) {
    data = JSON.parse(response)
    console.log(data)
    for (i = 0; i < data.length; i++) {
      let newColBox =  `<div id="${i}" class="colBox"></div>`;
      $('form').append(newColBox);
      let newQuestion = `<label><span class="bold">PREGUNTA ${i+1}:</span> ${data[i].enunciado}</label>`
      $('#' + i).append(newQuestion);
      let optionContainer = `<div class="optionContainer" id="optionContainer${i}"></div>`
      $('#' + i).append(optionContainer);

      for (j=0; j<data[i].respuestas.length; j++) {
        let option = `<label><input class="radio" type="radio" name="options${i}">${data[i].respuestas[j]}</label>`
        $('#optionContainer' + i).append(option);
      }

      let button = `<button class="vote" id="button${i}">VOTAR</button>`
      $('#' + i).append(button);
    }

  });
});

$(document).on('click', 'button',function(event){
 event.preventDefault();

 let options = $(this).siblings('.optionContainer');
 let checkedText = options.find('label input:checked').parent().text();
 let questionId = parseInt(options.parent().attr('id'));
 let questionText = data[questionId].enunciado;
 if (options.find('label input:checked').length != 0 ) {
   let index = checkAnswer(checkedText, questionText)
   if (index == -1) {
     let newAnswer = {name: checkedText, votes: 1 };
     answerCounter[questionText].push(newAnswer);
   } else {
     answerCounter[questionText][index].votes += 1;
     console.log(answerCounter)
   }
   options.find('label input:checked').prop('checked', false);
 }

})
