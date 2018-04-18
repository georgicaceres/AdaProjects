var add = document.getElementById('add')
// var count = 0;
function addTask() {
  var task = document.getElementById('task'); // Traer el input (tarea) ingresado por el usuario.
  if (task.value) {
    var taskList = document.getElementById('list'); //Traer el nodo <ul>.
    var li = document.createElement('li'); // Crear un elemento hijo <li>.
    var checkbox = document.createElement('input'); // Crear un nodo input (para la lista de tareas).
    var label = document.createElement('label'); // Crear un nodo label
    var borrar = document.createElement('input'); // Crear el botón "Eliminar"
    checkbox.type = "checkbox"; // Asignar type="checkbox"
    borrar.type = "button"; // Asignar type="button"
    label.textContent = task.value; // Agregar la tarea ingresada por el usuario al <label>.
    checkbox.classList.add("check") // SÓLO PARA CSS
    label.classList.add("tarea") // SÓLO PARA CSS
    borrar.value = "X" // SÓLO PARA CSS
    borrar.classList.add ("delete") // SÓLO PARA CSS

    // Armar el árbol de nodos
    taskList.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(borrar);

    // Agregar evento cuando una tarea es "checkeada"
    checkbox.addEventListener('change', event => {
      if (event.target.checked)
        label.classList.add('done');
      else
        label.classList.remove('done');
    });


    // Agregar evento al botón eliminar.
    borrar.addEventListener('click', event => {
      li.remove();
    })
  }

  task.value = "";
}

add.addEventListener('click', addTask);
  // var idCheck = "checkbox_" + count;
  // var idDelete = "delete_" + count;
  // taskList.innerHTML += `<li><input id='${idCheck}' type='checkbox'><label>${task.value}</label><input id='${idDelete}' type='button' value='Eliminar'></li>`;
  // var borrar = document.getElementById(idDelete);

  // document.getElementById(idDelete). addEventListener('click',);
  // li.appendChild(newTask);
  // li.appendChild(label);
  // label.textContent = task.value;

// function clean() {
//   var inputs = getElementsByTagName('input');
//   inputs.forEach(element => element.value = "")
// }




// var taskCheck= Array.from(getElementsByClassName("check"));
// taskCheck.forEach(element => element.addEventListener('change', DidIt))
