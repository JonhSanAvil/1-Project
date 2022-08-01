//Declarar las funciones de valores de cada dato y coger los datos para asi ver que he seleccionado
//Realizar los calculos
function showFullPrice () {
    var fullPrice;
   
    //Obtengo las noches
    var numberNight = document.getElementById("input-numberNight").value;
    if(numberNight <= 0) {
         fullPrice = "Minimo tienes que elegir una noche, " 
     } else {(fullPrice = numberNight + " noches")}
    

    //Obtengo el tipo de habitación
    var typeroom = document.getElementById("typeroom").value;
    fullPrice = fullPrice + " " + typeroom +",";
    var typeRoomPrice = document.getElementById("typeroom").value;
    if (typeRoomPrice === "Standard") {
        typeRoomPrice = { price:100 }
    } 
    if (typeRoomPrice === "Junior Suite") {
        typeRoomPrice = { price:120 }
    } 
    if (typeRoomPrice === "Suite") {
        typeRoomPrice = { price:150 }
    } 


    //Obtengo si quiere spa
    if (document.getElementById("Spa").checked) {
       var spa = document.getElementById("Spa").value;
    } else {
        var spa = "";
    }
    fullPrice = fullPrice + " " + spa+",";
    if (document.getElementById("SpaNo").checked) {
            var spaNo = document.getElementById("SpaNo").value;
        }else {
        var spaNo = "";
    }
    fullPrice = fullPrice + " " + spaNo+",";

    if (document.getElementById("Spa").checked) {
        var spaPrice = document.getElementById("Spa").checked
        spaPrice = { price:20 }
    } else {spaPrice = { price: 0 }}
  
   
    //Obtengo la ocupación
    var occupation = document.getElementById("occupation").value;
    fullPrice = fullPrice + " " + occupation+",";
    var occupationPrice = document.getElementById("occupation").value;
    if (occupationPrice === "Individual") {
        occupationPrice = 0.75
    } 
    if (occupationPrice === "Doble") {
        occupationPrice = 1
    } 
    if (occupationPrice === "Triple") {
        occupationPrice = 1.25
    } 

    //Obtengo noches de parking
    var parkingNight = document.getElementById("parking").value;
    if(parkingNight <= 0) {
       //aquí me gustaría decir nada para que si hay menos 0 o 0 no aparezca valor ninguno
        fullPrice = fullPrice + "" 
    } else {(fullPrice = fullPrice + " " + parkingNight + " noches de parking,")}


    //Pintamos resultado 
    document.getElementById("result").innerText = fullPrice;
    document.getElementById("cost").innerText = 
    ((typeRoomPrice.price*numberNight+spaPrice.price)*(occupationPrice)+(10*parkingNight)+"€");
   
   //desglose de gastos ¿Cómo podría ponerlo mejor desglosado? Uno por linea ya que aqui no hay br
    document.getElementById("breakdown").innerText = 
    ((typeRoomPrice.price*1+"€ precio por una noche, ")
    +" "+ 
    (typeRoomPrice.price*numberNight+"€ precio total de las noches, ")
    +" "+
    (spaPrice.price + "€ precio por el spa, ")
    +" "+
    ("Si es 1 no ha cambio en el precio, si es otro cambio del "+occupationPrice+"%, ")
    +" "+
    (10*1+"€ precio por una noche de parking, ")
    +" "+
    (10*parkingNight+"€ precio total de las noches del parking, "));

}
document.getElementById("button").addEventListener("click", showFullPrice);

//No consigo que funcione que cambie sin pulsar el boton de click 
document.getElementById("input-numberNight").addEventListener("keyup", showFullPrice);
document.getElementById("typeroom").addEventListener("keyup", showFullPrice);
document.getElementById("Spa").addEventListener("keyup", showFullPrice);
document.getElementById("SpaNo").addEventListener("keyup", showFullPrice);
document.getElementById("occupation").addEventListener("keyup", showFullPrice);
document.getElementById("parking").addEventListener("keyup", showFullPrice);


/*  Para calcular el coste de la estancia ten en cuenta lo siguiente:
La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
El uso del SPA incrementa la tarifa anterior en 20€.
Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor de
decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por
noche, mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
Cada noche de parking suma 10€.
Un ejemplo de estancia sería:
5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería: (100€
noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL.
*/
