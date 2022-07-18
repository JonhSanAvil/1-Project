/* Antonio he cambiado value por placeholder, para que así el texto no se tenga que borrar y se pueda escribir del tiron
al comprobar por consola si le doy directamente al boton no se carga nada pero en el momento que hay algo de texto si

¿Se podría poner las dos opciones? Es decir, por un lado primero placeholder y si no escribe nada que salga el valor determinado
por value, pero que el texto no este marcado por value y no se tenga que borrar, jajaja perdon no se si me explico bien */

document.getElementById("name").value = "Name please";
document.getElementById("name").placeholder = "Name please";
document.getElementById("lastName").value = "Last name here please";
document.getElementById("avatar").src = "img/avatar.png";
