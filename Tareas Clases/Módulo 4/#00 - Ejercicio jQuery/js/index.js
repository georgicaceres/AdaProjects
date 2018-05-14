var typeDocList = ["DNI", "LI", "LC", "LE", "CI"];

//Función que carga tipos de Documentos.
function loadDocTypes() {
  $.each(typeDocList, function(index, element) {
    option = `<option>${element}</option>`;
    $('#docType').append(option);
  });
}


//Función que valida el Documentos.
function valDoc(number) {
  if (!number.val()) {
    return true;
  } else {
    return /^[1-9][0-9]{4,7}$/.test(number.val());
  }
}

//Función que valida mayoría de edad.
function valAge() {
  if (!$('#bornDate').val()) {
    return true;
  } else{
    return (new Date() - new Date($('#bornDate').val())) / (365.25 * 24 * 60 * 60 * 1000) >= 18;
  }
}

//Función que valida el formulario.
function valForm() {
  var valid = true;
  $('.error').each(function(index, element){
    $(this).text('');
  });

  $('.oblig').each(function(index, element) {
    if (!$(this).val()) {
      valid = false;
    $(this).next().text("CAMPO OBLIGATORIO");
    }
  });

  // var invalidDoc = document.getElementById('invalidDoc')
  if (!valDoc($('#docNumber'))) {
    valid = false;
    $('#invalidDoc').text("NO VÁLIDO");
  }

  if (!valAge()) {
    valid = false;
    $('#ageError').text("LO SIENTO, ERES DEMASIADO JÓVEN!");
  }

  if ($('#termycond').is(':checked')) {
    valid = true;
  } else {
    valid = false;
    $('#termCondError').text("DEBES LEER Y ACEPTAR LOS TÉRMINOS Y CONDICIONES")
  }


  if (valid) {
    $('#myForm').submit();
  }
}


// Función para visualizar la imagen
function PreviewImage() {
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

  oFReader.onload = function (oFREvent) {
      document.getElementById("uploadPreview").src = oFREvent.target.result;
  };
};


$('#uploadImage').on('change', PreviewImage)

//Evento al presionar el botón "Enviar"
$('#send').on("click", valForm);

//Carga inicial de funciones.
loadDocTypes();
