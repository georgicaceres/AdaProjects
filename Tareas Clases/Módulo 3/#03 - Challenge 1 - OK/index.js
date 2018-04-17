var ppalList = ['Tarta JyQ','Ensalada Caprese','Milanesa','1/4 de Pollo']
var guarnList = ['Ensalada Mixta','Papas Fritas','Pure de Calabaza']
var postreList = ['Flan con Crema','Queso y Dulce','Mousse de Chocolate', "No, gracias!"]
var ppal = document.getElementById('ppal');
var guarn = document.getElementById('guarn');
var postre = document.getElementById('postre');
var button = document.getElementById('confirm')

function createOption(selectNode, optionName) {
  var option = document.createElement('option');
  selectNode.appendChild(option);
  option.textContent = optionName;
}

function loadFood() {
  ppalList.forEach(element => createOption(ppal, element));
  guarnList.forEach(element => createOption(guarn, element));
  postreList.forEach(element => createOption(postre, element));
}

function addPlate(plateList) {
  var span = document.getElementById(plateList.id + '-confirm');
  span.parentNode.parentNode.style.display = "block";
  console.log(span);
  span.textContent = plateList.value;
}

function displayMenu() {
  var dayPlateList = [ppal, guarn, postre];
  console.log(dayPlateList)
  dayPlateList.forEach(element => addPlate(element));
}

button.addEventListener('click', displayMenu)
loadFood();
