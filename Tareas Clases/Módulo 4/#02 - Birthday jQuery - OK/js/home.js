var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var savedData = JSON.parse(localStorage.getItem("jsonData"));
var currentDate = new Date();
// CARGAR FECHA ACTUAL
function loadCurrentDate() {
  var dateMonth = months[currentDate.getMonth()];
  var dateDay = currentDate.getDate();
  $('#currentDate').text(dateDay + ' de ' + dateMonth);
}

//
function checkDate() {
  $.each(savedData.users, function(index, item) {
    if (item.day == currentDate.getDate() && item.month-1 == currentDate.getMonth() ) {
      yourBirthDay(item.name, item.img);
    }
  });
}

// CARGAR NOMBRE E IMAGEN SELECECCIONADA CORRESPONDIENTE
function yourBirthDay(name, image) {
  var birthDay = `<h1 id="todayBirth"> FELIZ CUMPLE ${name.toUpperCase()} ! </h1><img src="${image}" id="yourImage">`;
  $('#textCol').append(birthDay);
}

loadCurrentDate()
checkDate();
