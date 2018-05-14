
function validar(e) {
  e.preventDefault();
  var name = $('#name').val();
  var surname = $('#surname').val();
  var mail = $('mail').val();

  if (name == 0 || surname == 0 || mail == 0) {
    let error = $('.error');
    $.each(error, function(index, element) {
      element.textContent = "CAMPO OBLIGATORIO";
    });
  }

  var options = $('.option');
  console.log(options);
  $.each(options, function(index, e) {
    if (e.checked) {
      console.log("Chequeado")
    }
  });
}


$('#rent').on('click', function(e) {
  if (validar(e)) {
      $('#form').submit();
      console.log("Formulario enviado")
  }
});

$('#clean').on('click', e => {
  console.log("Borré formulario");
  $('.error').html("");
});
