$('#ejes').hide();

$('#type').on("change", function(event) {
  let tipo = $('#type').find(":selected").text();
  if ( tipo == "Camion") {
    $('#ejes').show();
  }
});

$('#load').on("click", function(event) {
  event.preventDefault();
  let tipo = $('#type').find(":selected").text();
  let marca = $('#brand').val();
  let modelo = $('#model').val();
  let año = $('#year').val();
  let patente = $('#patent').val();
  if (tipo == "Auto") {
    let newInfraction = new Auto (marca, modelo, año, patente);
    console.log(newInfraction)
  } else {
    let newInfraction = new Camion (marca, modelo, año, patente);
    console.log(newInfraction)
  }
})
