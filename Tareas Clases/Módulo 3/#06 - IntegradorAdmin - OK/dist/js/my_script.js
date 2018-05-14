// Traer todos los elementos de clase "inner" (4)
var dataBox = Array.from(document.getElementsByClassName('inner'));
// Creo una lista de objetos.
var dataList = [{
  name: "New Orders",
  number: 210
},
{
  name: "Bounce Rate",
  number: 52+"%"
},
{
  name: "Users Registrations",
  number: 12
},
{
  name: "Unique Visitors",
  number: 21
}];

var users = [{
  name: "John Smith",
  number: 1
},{
  name: "AlexanderPierce",
  number: 2
},{
  name: "Georgina Cáceres",
  number: 3
},{
  name:"Alex Sam",
  number: 4
},{
  name: "Susan Doe",
  number: 5
},{
  name: "Bo Faubry",
  number: 6
},{
  name: "Megan Williams",
  number: 7
},{
  name: "Roy Fourson",
  number: 8
}]
// --------------   CHAT   ----------------
var chatInput = document.getElementById('inputMsg');
// chatInput = $('#inputMsg');
var chatButton = document.getElementById('btnMsg');
var chatBox = document.getElementById('chat-box');

var actualUser = 5;


// ------- Cargar Datos Color-Boxes -------
function cargarDatosBox() {
  dataBox.forEach( function (element, index) {
    var num = document.createElement('h3');
    num.textContent = dataList[index].number;
    var text = document.createElement('p');
    text.textContent = dataList[index].name;
    element.appendChild(num);
    element.appendChild(text);
  });
}

// ------- Función enviar chat -----------
function sendChat() {
  var source = "dist/img/user" + actualUser + "-128x128.jpg";
  chatBox.innerHTML += `<div class="item">
    <img class="offline"src= "${source}">
    <p class="message">
      <a href="#" class="name">
        <small class="text-muted pull-right">
          <i class="fa fa-clock-o"></i>
          ${new Date().toLocaleString().split(', ')[1].substr(0,4)}
        </small>
        ${users[actualUser-1].name}
      </a>
      ${chatInput.value}
    </p>
  </div>`;
  chatInput.value = "";
}
// -----------------------------------------

// -------------   TO DO LIST  -------------
function addTask() {

  var tagColor = ["danger", "warning", "info", "success"];
  var timeUnit = ["months", "days", "min", "weeks", "hours"];
  var timeNum = ["2", "6", "3", "4", "5"]
  var taskInput = document.getElementById("taskInput");
  var list = document.getElementById('todo-list');
  var task = document.createElement('li');
  var spanHandle = document.createElement('span');
  var i_point1 = document.createElement('i');
  var i_point2 = document.createElement('i');
  var checkBox = document.createElement('input');
  var spanInput = document.createElement('span');
  var small = document.createElement('small');
  var taskTools = document.createElement('div');
  var edit = document.createElement('i');
  var trash = document.createElement('i');
  var addItem = document.getElementById('addItem')
  // ------ ONLY FOR STYLES --------
  i_point1.classList.add("fa");
  i_point1.classList.add("fa-ellipsis-v");
  i_point2.classList.add("fa");
  i_point2.classList.add("fa-ellipsis-v");
  spanHandle.classList.add("handle");
  spanHandle.classList.add("ui-sortable-handle")
  spanInput.classList.add("text");
  small.classList.add("label");
  small.classList.add("label-" + tagColor[Math.floor(Math.random() * tagColor.length)]);
  taskTools.classList.add("tools");
  edit.classList.add("fa");
  edit.classList.add("fa-edit");
  trash.classList.add("fa");
  trash.classList.add("fa-trash-o");
//--------------------------------
checkBox.type = "checkbox";
spanInput.textContent = taskInput.value;
spanHandle.appendChild(i_point2);
spanHandle.innerHTML += `&nbsp`;
spanHandle.appendChild(i_point1);
task.appendChild(spanHandle);
task.appendChild(checkBox);
task.appendChild(spanInput);
task.appendChild(small);
small.innerHTML = `<i class="fa fa-clock-o"></i> ${timeNum[Math.floor(Math.random() * timeNum.length)] + " " + timeUnit[Math.floor(Math.random() * timeUnit.length)]}</small>`;
taskTools.appendChild(edit);
taskTools.appendChild(trash);
task.appendChild(taskTools);
list.appendChild(task);
taskInput.value = "";


// ---- Evento "CHECKED" -----
checkBox.addEventListener('change', event => {
  if (event.target.checked) {
    spanInput.classList.add('done');
  } else {
    spanInput.classList.remove('done');
  }
})

// ---- Evento "TRASH" --------
trash.addEventListener('click', event => {
  task.remove()
})


} // ---- add Task end ------


chatButton.addEventListener('click',sendChat);
addItem.addEventListener("click", addTask);
cargarDatosBox();
