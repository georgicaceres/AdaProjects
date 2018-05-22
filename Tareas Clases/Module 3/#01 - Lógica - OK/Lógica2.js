//Ejercicios de lógica - Parte 2

//1 – Un sistema de fidelización de usuarios implementa la siguiente regla para la adquisición de productos del catálogo.
//Se pide determinar la lógica de canje.
// - El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
// - Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza directamente el canje.
// - Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero, en ese caso cada peso equivaldrá a 3 puntos.
// - Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría premium, la relación pesos puntos será 1 a 5.
var productValue = 2000;
var clientPoints = 1000;
var clientPremium = true;
function canjear(clientPoints, productValue) {
  if ( clientPoints >= productValue) {
    var clientPoints = clientPoints - productValue;
    console.log("El canje se ha efectuado correctamente");
  } else if (clientPoints >= (productValue / 2)) {
    if (clientPremium) {
      var pointDiff = productValue - clientPoints;
      moneyDiff = pointDiff / 5;
      clientPoints = 0;
      console.log("Se requieren $ " + moneyDiff + " para completar el canje.")
    } else {
      var pointDiff = productValue - clientPoints;
      moneyDiff = pointDiff / 3;
      clientPoints = 0;
      console.log("Se requieren $ " + moneyDiff + " para completar el canje.")
    }
  } else {
    console.log("Puntos insuficientes. No es posible realizar el canje.")
  }
}

// Ejercicio 2 - Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, para tomar la decisión tiene en cuenta distintas variables.
// A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, por lo que para elegir esta opción el costo mensual deberá ser
// menor a $1500.
// B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%, con lo cual evaluará incluir almuerzo en la colonia
// si este no excede el 15% del valor de la cuota.
// C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a $1500, pero es doble turno y le brinda almuerzo, está dispuesta
// a pagar hasta $2800.
var budget;
var distance;
var monthCost;
var lunchCost;
var freeLunch = false;
var double = true;
function decide() {
  if (distance > 10) {
    if (double & freeLunch) {
      console.log("Pagar hasta $2800 por la colonia")
    } else {
      console.log("Pagar hasta $1500 por la colonia")
    }
  } else {
    console.log("El presupuesto inicial se incrementa 20%")
    if (lunchCost <= monthCost * 0.15){
      console.log("Contratar almuerzo")
    } else {
      console.log("No contratar almuerzo")
    }
  }
}

// Ejercicio 3 – Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas sin interés según el siguiente criterio.
// - Mastercard – hasta 6 cuotas s/interés
// - Visa – hasta 9 cuotas s/interés
// - Amex – hasta 3 cuotas sin interés
// - Todas las demás - 1 cuota sin interés
function cuotasCalculator(tarjeta) {
  if (tarjeta == Mastercard) {
    console.log('Usted tiene hasta 6 cuotas s/interés')
  } else if (tarjeta == Visa) {
    console.log('Usted tiene hasta 9 cuotas s/interés')
  } else if (tarjeta == Amex) {
    console.log('Usted tiene hasta 3 cuotas s/interés')
  } else {
    console.log('Uste tiene una sola cuota sin interés')
  }

}
