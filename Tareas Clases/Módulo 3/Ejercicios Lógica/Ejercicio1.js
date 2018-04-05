/* El sistema imprime el estado de los cuatro semáforos
en el orden establecido.
Considera seis combinaciones posibles de los estados de cada uno, siendo estas
rojo, amarillo y verde para el semáforo de los dos vehículos y
cruzar, precaución (equivalente a titilar), no cruzar, para los
peatones.
*/

var t = 0; // Tiempo desde el comienzo del sistema
var green = '💚';
var red = '🔴';
var yellow = '🌕';

var walk = '🚶';
var warning = '⚠️';
var stop = '🚷';

// vert_car, vert_people, hor_car, hor_people

while (t <= 12) {
  switch (t % 6) {
    case 0:
      console.log(green, walk, red, stop);
      break;
    case 1:
      console.log(green, warning, red, stop);
      break;
    case 2:
      console.log(yellow, stop, red, stop);
    break;
    case 3:
      console.log(red, stop, green, walk);
      break;
    case 4:
      console.log(red, stop, green, warning);
      break;
    case 5:
      console.log(red, stop, yellow, stop);
      break;
  }
  t++;
}
