
var hoteles = {
  Mencey: {
    name: "Mencey",
    location: "Tenerife",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  },
  Lani: {
    name: "Lani's Suites Deluxe",
    location: "Lanzarote",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
  },
};

var selectedHotel = prompt(
  "Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani",
);

/* Antonio necesito que me explique como javascript hace que prompt al hacer la pregunta y escribir Mency o Lani conecte con
dichas variables y el papel que juegan los [] de selectedHotel */

document.getElementById("name-hotel").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
  una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

document.getElementById("rating").innerHTML = stars[rating];

/* IMPORTANTE 
.innerHTML = stars[rating];
hoteles[selectedHotel].name;
Las partes entre [] corchetes es un string, que nos facilita coger otra variable de manera dinamica
en este caso es por medio de prompt al hacer una pregunta e indicarle dos variables que ya estan declaradas
los nombres de los hoteles y el punto . es clave para hacer referencia a que cargue el nombre, el lugar las demas
variables del objeto
*/