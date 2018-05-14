var savedData = JSON.parse(localStorage.getItem("jsonData"));
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var currentDate = new Date();

$('#thisMonth').text('CUMPLEAÑOS DE ' + months[currentDate.getMonth()].toUpperCase() )

function loadNextBD() {
  savedData.users.forEach(function(e, index) {
    if (savedData.users[index].month == currentDate.getMonth()+1 && savedData.users[index].day > currentDate.getDate()  ) {
      var next = `<li class="next">
      <span class="next-date">${savedData.users[index].day} DE ${months[savedData.users[index].month-1].toUpperCase()}</span>
      <span class="next-name"> &nbsp ${savedData.users[index].name.toUpperCase()}</span>
      </li>`
      $('#list').append(next);
    }
  });
};

loadNextBD();

//Agregar botones para borrar elementos. Opción mostrar todos los cumpleaños. Ordenar por fecha.

// document.ready ...
