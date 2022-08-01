//Primero declaramos las variables y ponemos que pase el string a number con el parsenInt Ojo

var number1 = () => parseInt(document.getElementById("input-number1").value);
var number2 = () => parseInt(document.getElementById("input-number2").value);

var add = () => {
  return number1() + number2();
};
var subtract = () => number1() - number2();
var multiply = () => number1() * number2();
var divide = () => number1() / number2();

var showAdd = () => (document.getElementById("resultado").value = add());
var showSubtract = () =>
  (document.getElementById("resultado").value = subtract());
var showmultiply = () =>
  (document.getElementById("resultado").value = multiply());
var showdivide = () => (document.getElementById("resultado").value = divide());

// Hasta aquí declarar las funcione, luego declarar los eventos

document.getElementById("add").addEventListener("click", showAdd);
document.getElementById("subtract").addEventListener("click", showSubtract);
document.getElementById("multiply").addEventListener("click", showmultiply);
document.getElementById("divide").addEventListener("click", showdivide);


/* Antonio lo he intentado pero no consigo que salga Error */

/* function showMistake() {
  if (isNaN(number1()) || isNaN(number2())) {
    document.getElementById("resultado").innerText = "Error, debes introducir dos números";
  }
} */

/* var mistake = number1 = !"" || number2 = !"" ? document.getElementById("resultado").innerText = "Error, debes introducir dos números" : console.log("funciona");
 */