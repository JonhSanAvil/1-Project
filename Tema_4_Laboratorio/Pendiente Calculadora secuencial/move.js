/* Repite el ejercicio de la calculadora pero esta vez hagamos una calculadora secuencial. Esto es:

Añade un botón de igual o resultado ( "=" ).
Una calculadora secuencial funciona del siguiente modo:
El usuario introduce un primer número.
Clicka una operación.
A continuación introduce un segundo número.
Clicka de nuevo otra operación.
Y así sucesivamente... hasta que pulsa el botón de resultado.
Si te fijas, la clave de este algoritmo es ir acumulando el resultado parcial. Para ello, con cada click que el usuario hace en una
operación, deberás:
Extraer el operando que hay en el input.
Actualizar el resultado parcial, que será aplicar la operación anterior guardada, usando como operandos el resultado
parcial y el nuevo operando.
Almacenar la operación actual para la siguiente vez.
NOTA: Gran parte de las funciones que vimos en la calculadora básica podrían servirte aqui también. */

var number1 = () => parseInt(document.getElementById("input-number1").value);
var data1 = () => document.getElementById("resultado")

document.getElementById("add").addEventListener("click", value);
document.getElementById("subtract").addEventListener("click", showSubtract);
document.getElementById("multiply").addEventListener("click", showmultiply);
document.getElementById("divide").addEventListener("click", showdivide);

var guardado1 = number1

var add = () => number1() + ();
var subtract = () => number1() - ();
var multiply = () => number1() * ();
var divide = () => number1() / ();

var showAdd = () => (document.getElementById("resultado").value = add());
var showSubtract = () => (document.getElementById("resultado").value = subtract());
var showmultiply = () => (document.getElementById("resultado").value = multiply());
var showdivide = () => (document.getElementById("resultado").value = divide());

// Hasta aquí declarar las funcione, luego declarar los eventos

/* document.getElementById("add").addEventListener("click", showAdd);
document.getElementById("subtract").addEventListener("click", showSubtract);
document.getElementById("multiply").addEventListener("click", showmultiply);
document.getElementById("divide").addEventListener("click", showdivide); */



/* function showMistake() {
  if (isNaN(number1()) || isNaN(number2())) {
    document.getElementById("resultado").innerText = "Error, debes introducir dos números";
  }
} */

