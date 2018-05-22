var count = 0;
$('#task').focus(); // Hacer foco en la caja del input.

// ADD-TASK FUNCTION
function addTask() {
  var task = $('#task').val(); // Traer el valor del elemento con id="task" (input de las tareas).
  if (!task) return; // Si en la caja no dice nada, terminar.
  var li =$(`<li class="no-edit" id='task-${count}'>
    <input type='checkbox' class='checkbox'></input>
    <span class="task">${task}</span><input class="edit-input" type="text"></input>
    <button class='editBtn'> <i class="fas fa-edit"></i> </button>
    <button class='save'> <i class="fas fa-save"></i> </button>
    <button data-task='task-${count}' class='delete'> <i class="fas fa-times-circle"></i> </button>
  </li>`); // Crear etiquetas HTML. Las comillas ` ` permiten concatenar código sin usar +, con ${ }.
  $('#list').append(li); // Agregar el tag creado como hijo del elemento con id="list" (<ul>).
  $('#task').val(""); // Limpia el campo del input
  count++; // Aumenta el contador en 1.
};

// ADD-TASK CALL
$('#add').on('click', addTask); // Llamar a addTask cuando se clickea el button de id="add"
$('#task').on('keypress', function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
}); // Se activa cuando se presiona una tecla, detecta la tecla Enter (CodeKey: 13) y llama a la función addTask

// CHECKBOX CHECKED (PARENT instead DATA)
$("#list").on('click', '.checkbox', function (event) {
  $(this).parent().toggleClass('done');
});
// De todos los elementos de id="list", me quedo con los que tienen class="checkbox".
// El evento consiste en agregarle al padre del botón que estoy presionando, un toggleClass.
// El toggle simplifica  el tener que poner un if/else para agregar o quitar según el estado.

// DELETE BUTTON (with DATA)
$("#list").on('click', '.delete', function (event) {
  var taskId = $(this).data('task');
  $('#'+ taskId).remove();
});
// De todos los elementos de id="list", agregarle un evento a los que tienen class="delete".

// EDIT BUTTON
$("#list").on('click', '.editBtn', function (event) {
  $(this).parent().toggleClass('no-edit'); // Agregar al padre del botón clickeado, un toggleClass="no-edit"
  $(this).parent().toggleClass('edit'); // Agregar al padre del botón clickeado. un toggleClass="edit"
  // En el CSS estos toggles me permiten switchear el display (VER)
  var task = $(this).parent().find('span').text(); // Crear variable que busca en el padre del botón clickeado, un elemento con tag span.
  $(this).parent().find('.edit-input').val(task); // Busca en el padre del botón clickeado, la clase="edit-input" y le asigna el contenido task.
  $(this).parent().find('.edit-input').select(); // Selecciona la caja de input para empezar a escribir.
});

// SAVE CHANGES
function save() {
  $(this).parent().toggleClass('no-edit'); // Agregar al padre del botón clickeado, un toggleClass="no-edit"
  $(this).parent().toggleClass('edit'); // Agregar al padre del botón clickeado. un toggleClass="edit"
  var newTask = $(this).parent().find('.edit-input').val(); // Busca en el padre del botón clickeado, la class="edit-input" y recupera su valor. Lo guardo en newTask.
  $(this).parent().find('span').text(newTask); // Busca en el padre del botón clickeado, el tag span y le incorpora el texto nuevo (newTask).
}

$("#list").on('click', '.save', save); // Llama a la función save cuando se clickea el elemento de class="save";
$("#list").on('keypress', '.edit-input', function (event) {
  if (event.keyCode === 13) {
    save.bind(this)(); // Llamar al a función save, usanddo este this. (MAGIA NEGRA)
  }
}); // Se activa cuando se presiona una tecla, detecta la tecla Enter (CodeKey: 13) y llama a la función save.
