var add = document.getElementById('add')

function addTask() {
  var taskList = document.getElementById('list');
  var li = document.createElement('li');
  var task = document.getElementById('task');
  var newTask = document.createElement('input');
  newTask.type = "checkbox";
  newTask.classList.add("check")
  taskList.appendChild(li);
  li.appendChild(newTask);
  var label = document.createElement('label');
  li.appendChild(label);
  label.textContent = task.value;
  task.value = "";
}

function clean() {
  var inputs = getElementsByTagName('input');
  inputs.forEach(element => element.value = "")
}


function DidIt() {
  var test = checkbox => checkbox.checked;
  var index = taskCheck.findIndex(taskCheck.some(test));
  taskCheck[index].classList.add = "remove";
}

var taskCheck= Array.from(getElementsByClassName("check"));
add.addEventListener('click', addTask);
taskCheck.forEach(element => element.addEventListener('change', DidIt))
