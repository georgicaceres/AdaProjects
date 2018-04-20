
var count = 0;
$('#task').focus(); // Hacer foco en la caja del input.

// addTask function
function addTask() {
  var task = $('#task').val(); // Traer el valor del elemento con id="task" (input de las tareas).
  if (!task) return; // Si en la caja no dice nada, terminar.
  var li =$(`<li class="no-edit" id='task-${count}'>
    <input type='checkbox' class='checkbox'></input>
    <span class="task">${task}</span><input class="edit-input" type="text"></input>
    <button class='editBtn'> <i class="fas fa-edit"></i> </button>
    <button class='save'> <i class="fas fa-save"></i> </button>
    <button data-task='task-${count}' class='delete'> <i class="fas fa-times-circle"></i> </button>
  </li>`); // Crear etiquetas HTML. Las comillas ` ` permiten concatenar código usando ${ }.
  $('#list').append(li); // Agregar el tag creado como hijo del elemento con id="list" (<ul>).
  $('#task').val(""); // Limpia el campo del input
  count++; // Aumenta el contador en 1.
};

// Call to addTask
$('#add').on('click', addTask); // Llamar a addTask cuando se clickea el button de id="add"
$('#task').on('keypress', function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
}); // Llamar a addTask cuando se presiona la tecla Enter.

// Checkbox Checked (PARENT instead DATA)
$("#list").on('click', '.checkbox', function (event) {
  $(this).parent().toggleClass('done');
});
// De todos los elementos de id="list", agregarle un evento a los que tienen class="checkbox".
// El evento consiste en agregarle al padre del botón que estoy presionando, un toggleClass.
// El toggle simplifica  el tener que poner un if/else para agregar o quitar según el estado.

// Delete button and callback (with DATA)
$("#list").on('click', '.delete', function (event) {
  var taskId = $(this).data('task');
  $('#'+ taskId).remove();
});
// De todos los elementos de id="list", agregarle un evento a los que tienen class="delete".

// Edit button and callbak
$("#list").on('click', '.editBtn', function (event) {
  $(this).parent().toggleClass('no-edit');
  $(this).parent().toggleClass('edit');
  var task = $(this).parent().find('span').text();
  $(this).parent().find('.edit-input').val(task);
  $(this).parent().find('.edit-input').select();
});

// Save Changes
function save() {
  $(this).parent().toggleClass('no-edit');
  $(this).parent().toggleClass('edit');
  var newTask = $(this).parent().find('.edit-input').val();
  $(this).parent().find('span').text(newTask);
}

$("#list").on('click', '.save', save)
$("#list").on('keypress', '.edit-input', function (event) {
  if (event.keyCode == 13) {
    save.bind(this)();
  }
});
