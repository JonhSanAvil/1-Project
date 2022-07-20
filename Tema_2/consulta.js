var hotel = {
    name: "NH Málga",
    location: "Málaga",
    img:
    "https://multimedia.andalucia.org/fotos/image_130424.jpeg",
};

document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;
document.getElementById("hotel-location").innerHTML =
  "Ubicado en " + hotel.location;
document.getElementById("hotel-img").src = hotel.img;


var puntuacion = prompt("Puntuación del 1 al 5");
document.getElementById("rating").innerHTML = puntuacion + " estrellas";

var aceptaCondiciones = confirm("¿Desea que su reseña sea anonima?");
document.getElementById("anonymous").checked = aceptaCondiciones;
/* Preguntar por checked y innerHTML funciones entiendo que checked es para marcar
el check pero innerHTML ¿? */


