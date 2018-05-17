var data;
var savedVotes = localStorage.getItem("votes");
var answerCounter = savedVotes ? JSON.parse(savedVotes) : {};

// Function add vote
function addVote(question, answer) {
  answerCounter[question + '|' + answer] = getVote(question, answer) + 1;
  localStorage.setItem("votes", JSON.stringify(answerCounter));
};

// Get votes
function getVote(question, answer) {
  return answerCounter[question + '|' + answer] || 0; // When the first value is undefined return the second value
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

      for (j = 0; j < data[i].respuestas.length; j++) {
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
 let answerText = options.find('label input:checked').parent().text();
 let questionId = parseInt(options.parent().attr('id'));
 let questionText = data[questionId].enunciado;
 if (options.find('label input:checked').length) {
   addVote(questionText, answerText);
   const mostVoted = data[questionId].respuestas
    .map(answer => ({answer: answer, votes: getVote(questionText, answer)})) // Syntactic Sugar
    .sort((a, b) => b.votes - a.votes)[0];

   console.log(answerCounter, mostVoted);
 }
 options.find('label input:checked').prop('checked', false);
})
