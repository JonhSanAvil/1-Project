const booking = { count: 5, price: 127.95};

let total = booking.count * booking.price; 
const discount = total > 500 ? total * 0.20 : 0;

console.log("total:" , total +"€");

if (total > 500 && discount > 0) {
    const discounted = total - discount;
    console.log("Total con descuento del 20:", discounted + "€")
}

const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };

/* Comparar si dos reservas son iguales. */

const compararReservas = booking1.count === booking2.count && booking1.price === booking2.price;
console.log(compararReservas)
if (compararReservas == false) {
    console.log("No son iguales");
} else {
    console.log("Si son iguales")
    ;} 

if (booking1.count == booking2.count && booking1.price == booking2.price) {
    console.log("No son iguales");
} else {
    console.log("Si son iguales")
    ;}


/* Mostrar la suma del número de noches de las dos reservas. */

const numeroTotalNoches =  booking1.count + booking2.count;
console.log(numeroTotalNoches)

/* Comparar dos reservas para mostrar la de mayor número de noches.*/

/* Programando me he dado cuenta de esto 
que esta comparando la dos variables para sacar uno y que dijera solo el numero de noches
que fueran 5 o 8, pero que si quería sacar un mensaje con cual es la mayor que creo que es la mejor
respuesta para el enunciado es mejor la segunda opción*/

const mayorNumeroDeNoches = 
booking1.count > booking2.count ? "booking1 tiene más noches" : "booking2 tiene más noches";
console.log(mayorNumeroDeNoches)  

/* booking1.count > booking2.count? console.log("booking1 tiene más noches"):console.log("booking2 tiene más noches"); */

/* 
Lo pongo también de la forma más larga
let resultado;
if(mayorNumeroDeNoches = booking1.count > booking2.count) {
    console.log(booking1.count);
} else {
    console.log(booking2.count);
} */

/* Ampliar una noche más una reserva.*/

const ampliar1= ++booking1.count
console.log(booking1)

/* Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).*/

let totalReserva1 = booking1.count * booking1.price;
let totalReserva2 = booking2.count * booking2.price;
const discount1 = totalReserva1 > 500 ? totalReserva1 * 0.20 : 0;
const discount2 = totalReserva2 > 500 ? totalReserva2 * 0.20 : 0;
console.log("total:" , totalReserva1 +"€");
console.log("total:" , totalReserva2 +"€");
console.log(discount1);
console.log(discount2);

const total1final = totalReserva1 - discount1;
const total2final = totalReserva2 - discount2;
console.log("total:" , total1final +"€");
console.log("total:" , total2final +"€");

const diferenciaTotal = total1final - total2final;
console.log(diferenciaTotal);

/* Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).*/

const mayorPrecioReserva = total1final > total2final ? total1final : total2final;
console.log(mayorPrecioReserva);

/* Mostrar número de reservas a las que se podrían aplicar descuento.*/




/* Mostrar "Todas con descuento" si las dos reservas tienen descuentos.*/


if (discount1 == 0 && discount2 == 0) {console.log("Todas con descuento");} 

/* Mostrar la suma del precio total con descuentos de las dos reservas. */

const PrecioTotal = total1final + total2final;
console.log(PrecioTotal);