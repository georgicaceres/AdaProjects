var send = document.getElementById('send');
var nacList = [ "Argentina", "Uruguay", "Brasil", "Paraguay", "Chile", "Perú", "Venezuela", "Ecuador", "Colombia"];
var typeDocList = ["DNI", "LI", "LC", "LE", "CI"];
var placesList = [{
  name: "Buenos Aires",
  cities: ["CABA", "Tigre", "Villa Ballester", "Liniers"]
},
{
  name: "Córdoba",
  cities: ["Córdoba", "Mina Clavero", "Carlos Paz"]
},
{
  name: "Mendoza",
  cities: ["Mendoza", "San Martín", "San Rafael", "Rivadavia"]
},
{
  name: "San Luis",
  cities: ["San Luis", "Villa Mercedes", "Merlo", "La Punta"]
}
]
var provSelected = state.value;

//Función que carga las nacionalidades
function loadNacList() {
  var countries = document.getElementById("countries")
  for (i = 0; i < nacList.length; i++) {
    var option = document.createElement('option');
    countries.appendChild(option);
    option.textContent = nacList[i];
  }
}

//Función que carga tipos de Documentos.
function loadDocTypes() {
  var docType = document.getElementById('docType');
  var i;
  for (i = 0; i < typeDocList.length; i++) {
    var option = document.createElement('option');
    docType.appendChild(option);
    option.textContent = typeDocList[i];
  }
}

//Función que carga las Provincias.
function loadProvinces() {
  var state = document.getElementById('state');
  var i;
  for (i = 0; i < placesList.length; i++) {
    var option = document.createElement('option');
    state.appendChild(option);
    option.textContent = placesList[i].name;
  }
}

//Función que carga las ciudades.
function loadCities() {
  var province = state.value;
  var city = document.getElementById('city');
  var i, j, k;
  while (city.firstChild) {
    city.removeChild(city.firstChild);
  }
  for (j = 0; j < placesList.length; j++) {
    if (placesList[j].name == province) {
      var index = j;
      for (i = 0; i < placesList[index].cities.length; i++) {
        var option = document.createElement('option');
        city.appendChild(option);
        option.textContent = placesList[index].cities[i];
      }
    }
  }
}

//Función que valida el Documentos.
function valDoc(docNumber) {
  if (!docNumber.value) {
    return true;
  } else {
    return /^[1-9][0-9]{4,7}$/.test(docNumber.value);
  }
}

//Función que valida el E-mail.
function valMail(mail) {
  if (!mail.value) {
    return true;
  } else {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail.value));
  }
}

//Función que valida el Teléfono.
function valTelNumber(telNumber) {
  if (!telNumber.value) {
    return true;
  } else {
    if (telNumber.value.replace(/\D/, '').match(/^0?((11)?(15)?[2-7]\d{7}|[23]\d{2}(15)?[2-7]\d{6}|[23]\d{3}(15)?[2-7]\\d{5})$/)) {
      return true;
    } else {
      return false;
    }
  }
}

//Función que valida  el checkbox (Género).
function valCheckBox() {
  var checkboxes = Array.from(document.querySelectorAll('.genero')); //querySelectorAll NO DEVUELVE UN ARRAY. Es una lista de nodos.
  //Array.from() devuelve un array.

  var test = checkbox => checkbox.checked; //Define una función más elegantemente cuando sólo hay un return statement.
  // function(checkbox) {
  //   return checkbox.checked;
  // };
  return checkboxes.some(test); // El métdo 'some' devuelve true si para alguno de los elementos del array (checkboxes), la función test es true.

  //MÉTODO MÁS RÚSTICO
  // var result = false;
  // for (i = 0; i < checkboxes.length, i++) {
  //   if (checkboxes[i].checked) {
  //     result = true;
  //     break;
  //   }
  // }
}

//Función que valida mayoía de edad.
var bornDate = document.getElementById('bornDate');
function valAge() {
  if (!bornDate.value) {
    return true;
  } else{
    return (new Date() - new Date(bornDate.value)) / (365.25 * 24 * 60 * 60 * 1000) >= 18;
  }
}


//Función que valida el formulario.
function valForm() {
  var obl = document.getElementsByClassName('oblig');
  var err = document.getElementsByClassName('error');
  var docNumber = document.getElementById('docNumber');
  var mail = document.getElementById('mail');
  var telNumber = document.getElementById('telNumber')
  var valid = true;
  Array.from(err).forEach(e => e.textContent = "");

  for (var i = 0; i < obl.length; i++) {
    if (!obl[i].value) {
      valid = false;
      err[i].textContent = "CAMPO OBLIGATORIO";
    }
  }

  var invalidDoc = document.getElementById('invalidDoc')
  if (!valDoc(docNumber)) {
    valid = false;
    invalidDoc.textContent = "NO VÁLIDO";
  }

  var invalidMail = document.getElementById('invalidMail');
  if (!valMail(mail)) {
    valid = false;
    invalidMail.textContent = "NO VÁLIDO";
  }

  var telError = document.getElementById('telError');
  if (!valTelNumber(telNumber)) {
    valid = false;
    telError.textContent = "NO VÁLIDO";
  } else {
    telError.textContent = "";
  }

  var genderError = document.getElementById('genderError');
  if (!valCheckBox()){
    valid = false;
    genderError.textContent = "CAMPO OBLIGATORIO";
  } else {
    genderError.textContent = "";
  }

  var ageError = document.getElementById('ageError');
  if (!valAge()) {
    valid = false;
    ageError.textContent = "LO SIENTO, ERES DEMASIADO JÓVEN!"
  }

  if (valid) {
    var win = document.getElementById('myForm');
    win.submit();
  }
}

//Evento al presionar el botón "Enviar"
send.addEventListener("click", valForm);
state.addEventListener('change', loadCities);

//Carga inicial de funciones.
loadNacList();
loadDocTypes();
loadProvinces();
loadCities();
