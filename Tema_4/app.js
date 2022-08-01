var getName = () => document.getElementById("name").value;
var getSurname1 = () => document.getElementById("lastname1").value;
var getSurname2 = () => document.getElementById("lastname2").value;
var getFullName = () => getName() + " " + getSurname1() + " " + getSurname2();
var submitName = () => {
document.getElementById("full-name").innerText = getFullName();
};

document.getElementById("name").addEventListener("keyup", submitName);
document.getElementById("lastname1").addEventListener("keyup", submitName);
document.getElementById("lastname2").addEventListener("keyup", submitName);

//Primera paso y asi se llega a lo que hay arriba
/* function submitName() {
    var fullName;
    // Obtengo nombre
    var name = document.getElementById("name").value;
    fullName = name;
    // Obtengo apellido 1
    var surname1 = document.getElementById("lastname1").value;
    fullName = fullName + " " + surname1;
    // Obtengo apellido 2
    var surname2 = document.getElementById("lastname2").value;
    fullName = fullName + " " + surname2;
    // Pintamos el nombre completo
    document.getElementById("full-name").innerText = fullName;
    }
    // Por último, registramos la función submitName() bajo el evento
    // 'click' del botón submit.
    document.getElementById("my-buttom").addEventListener("click", submitName);
     */