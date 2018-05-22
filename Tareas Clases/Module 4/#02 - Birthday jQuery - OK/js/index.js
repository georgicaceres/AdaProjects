
var images =[{
  name: "Alien Lord",
  id: 0
},{
  name: "Alien",
  id: 1
},{
  name: "Anakin",
  id: 2
}, {
  name:"Ape Suit",
  id: 3
}, {
  name: "Archer",
  id: 4
},{
  name: "Artist",
  id: 5
}, {
  name: "Ayayayayay",
  id: 6
}, {
  name: "Aztec Warrior",
  id: 7
}, {
  name:"Bad Robot",
  id: 8
}, {
  name: "Barbossa Pirate",
  id: 9
}, {
  name: "Bat",
  id: 10
}, {
  name: "Batman",
  id: 11
}];

// CARGAR IMÁGENES PARA ELEGIR
function loadImgs() {
  images.forEach(function(e, index) {
    var newImg = $(`<img src='imgs/Lego ${images[index].name}.png' class="lego" data-id='${images[index].id}' alt="Lego Image">`);
    $('#grid-container').append(newImg);
  });
}

// VALIDAR CAMPOS OBLIGATORIOS
function validar(event) {
  event.preventDefault();
  var result = true;
  if (!$('#name').val()) {
    $('#errorName').html('CAMPO OBLIGATORIO');
    result = false;
  };

  if (!$('#day').val() || $('#month').val() == "-1") {
    $('#errorDate').html('CAMPO OBLIGATORIO');
    result = false;
  };

  if (!$('#selectImgName').text()) {
    $('#errorImg').html('NO HAS ELEGIDO TU IMAGEN FAVORITA!');
    result = false;
  };
  return result;
};

// ELEGIR IMAGEN
$('#grid-container').on('click', '.lego', function() {
  var selectImgId = $(this).data('id');
  images.forEach(function(e,index) {
    if (images[index].id == selectImgId) {
      $('#selectImgName').html(images[index].name);
    }
  });
});

// LIMPIAR LOS CAMPOS
function clean() {
  $('#name').val('');
  $('#day').val('');
  $('#month').val('');
  $('#selectImgName').text('');
};

var jsonBirthday = {};
var savedData = JSON.parse(localStorage.getItem("jsonData")) // Convierto a Json (revierte el stringify)
var dataBaseBD = savedData ? savedData.users : []; // Operador Ternario

$('#save').on('click', function(event) {
  event.preventDefault();
  if (validar(event)) {
    let newBD = {
    name: $('#name').val(),
    day: $('#day').val(),
    month: $('#month').val(),
    img:'imgs/Lego ' + $('#selectImgName').text() + '.png',
  };
  dataBaseBD.push(newBD);
  jsonBirthday = {
    "users": dataBaseBD,
    "total": dataBaseBD.length
  };
  localStorage.setItem("jsonData", JSON.stringify(jsonBirthday) ) //convierte a cadena de caracteres.
  clean();
  }
});

loadImgs();
