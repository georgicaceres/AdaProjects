var flowers = [{
  name: 'Aleli',
  src: "imgs/aleli.jpg"
},{
  name: 'Jazmin',
  src: "imgs/jazmin.png"
},{
  name: 'Magnolia',
  src: "imgs/magnolia.jpg"
},{
  name: 'Peonía',
  src: "imgs/peonia.jpg"
}];

function loadFlowers() {
  $.each(flowers, function(index, item) {
    option = `<option>${item.name}</option>`;
    $('#flower').append(option);
  });
};

function loadImage() {
  $.each(flowers, function(index, item) {

    if ($('#flower option:selected').text() == item.name) {
      console.log(item.name, $('#flower option:selected').text(), item.src )
      $('#selectImg').attr('src', item.src )
    }
  });
};

$('#select').on('click', loadImage)

loadFlowers();
loadImage()
