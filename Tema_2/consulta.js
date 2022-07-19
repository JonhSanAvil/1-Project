

var puntuacion = prompt("Puntuación del 1 al 5");
document.getElementById("rating").innerHTML = puntuacion + " " + "estrellas";

var aceptaCondiciones = confirm("¿Desea que su reseña sea anonima?");
document.getElementById("anonymous").innerHTML = aceptaCondiciones;
/* alert(aceptaCondiciones); */




var hotel = {
    name: "NH Málga",
    location: "Málaga",
    img:"https://static.logitravel.com/cloudcontent/fotos/agregadorHotelero/0000/04518/4518/1.jpg?f=15847051",
}

hotel.name 
document.getElementById("hotel-name").innerHTML = hotel.name;

hotel.location  
document.getElementById("hotel-location").innerHTML = hotel.location;

hotel.img 
document.getElementById("hotel-img").innerHTML = hotel.img;