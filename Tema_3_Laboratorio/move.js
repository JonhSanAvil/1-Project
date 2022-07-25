/* const product = 
{
   ropa: { count: 3, price: 13.00, type: "ropa" },
   alimentación: { count: 8, price: 2.90, type: "alimentación" },
   libro: { count: -1, price: 20.00, type: "libro" },
} */

const product1 = { count: 1, price: 14, type: "ropa" };
const product2 = { count: 8, price: 1.6, type: "alimentación" };
const product3 = { count: -2, price: 20, type: "libro" };
const product4 = { count: 10, price: 8.5, type: "ticket bus" };

//IMPORTANTE ojo me falta declar la variable primero total y ya luego aplicarla en el if
// No la estaba creando sino que tiraba directamente al if y creaba la multiplicación, error.
let Totalproduct1;

if (product1.count > 0) {
  Totalproduct1 = product1.count * product1.price;
} else {
  Totalproduct1 = 0;
}
console.log(Totalproduct1 +"€")

let Totalproduct2;

if (product2.count > 0) {
  Totalproduct2 = product2.count * product2.price;
} else {
  Totalproduct2 = 0;
}
console.log(Totalproduct2 +"€")


let Totalproduct3;

if (product3.count > 0) {
  Totalproduct3 = product3.count * product3.price;
} else {
  Totalproduct3 = 0;
}
console.log(Totalproduct3 +"€")

let Totalproduct4;

if (product4.count > 0) {
  Totalproduct4 = product4.count * product4.price;
} else {
  Totalproduct4 = 0;
}
console.log(Totalproduct4 +"€")



//Calcular el IVA

let tipoIVA;

switch(product1.type) {
   case "alimentación":
         tipoIVA = 0.10; break;
   case "libro":
         tipoIVA = 0.04; break;  
   case "ropa":
         tipoIVA = 0.21; break;  
   case "ticket bus":
         tipoIVA = 0.21; break;  
}

const IVA = Totalproduct1 * tipoIVA;
console.log(IVA+"€");
