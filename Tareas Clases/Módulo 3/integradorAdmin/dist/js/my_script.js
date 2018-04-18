// Traer todos los elementos de clase "inner" (4)
var dataBox = Array.from(document.getElementsByClassName('inner'));
// Creo una lista de objetos.
var dataList = [{
  name: "New Orders",
  number: 150
},
{
  name: "Bounce Rate",
  number: 53
},
{
  name: "Users Registrations",
  number: 44
},
{
  name: "Unique Visitors",
  number: 65
}];

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


// Chat
var inputMsg = document.getElementById('inputMsg');
var btnMsg = document.getElementById('btnMsg');
var chatBox = document.getElementById('chat-box');

function cargarMsg() {
  var item = document.createElement('div');
  item.classList.add('item');

  var img = document.createElement('img');
  var p = document.createElement('p');
  var a = document.createElement('a');

  item.appendChild(img);
  item.appendChild(p);
  p.appendChild(a);
  p.textContent = inputMsg.value;
  chatBox.appendChild(item);
  inputMsg.value="";
}

btnMsg.addEventListener('click',cargarMsg);
cargarDatosBox();


//To Do List
var todoList = document.getElementsByClassName('todo-list');
var inputToDo = document.getElementById("inputToDo");
var btnAdd = document.getElementById("btnAdd");
var btnEliminar = document.getElementsByClassName("fa-trash-o");

function todoAdd() {
  var task = document.createElement("li");
  // var span1 = document.createElement("span");
  // span1.classList.add("handle");
  // task.appendChild(span1);
  todoList.appendChild(task);
  task.textContent = inputToDo.value;
}

btnAdd.addEventListener("cli