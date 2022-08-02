//Primero declaramos las variables y ponemos que pase el string a number con el parsenInt Ojo

var number1 = () => parseInt(document.getElementById("input-number1").value);
var number2 = () => parseInt(document.getElementById("input-number2").value);

var add = () => number1() + number2();
var subtract = () => number1() - number2();
var multiply = () => number1() * number2();
var divide = () => number1() / number2();

var showAdd = () => {
  if (isNaN(number1()) || isNaN(number2())) {
    document.getElementById("resultado").value = "Error";
  } else {
    document.getElementById("resultado").value = add();
  }
};
var showSubtract = () => {
  if (isNaN(number1()) || isNaN(number2())) {
    document.getElementById("resultado").value = "Error";
  } else {
    document.getElementById("resultado").value = subtract();
  }
};
var showmultiply = () => {
  if (isNaN(number1()) || isNaN(number2())) {
    document.getElementById("resultado").value = "Error";
  } else {
    document.getElementById("resultado").value = multiply();
  }
};
var showdivide = () => {
  if (isNaN(number1()) || isNaN(number2())) {
    document.getElementById("resultado").value = "Error";
  } else {
    document.getElementById("resultado").value = divide();
  }
};

// Hasta aquí declarar las funcione, luego declarar los eventos

document.getElementById("add").addEventListener("click", showAdd);
document.getElementById("subtract").addEventListener("click", showSubtract);
document.getElementById("multiply").addEventListener("click", showmultiply);
document.getElementById("divide").addEventListener("click", showdivide);

/* function Mistake() {
  if (isNaN(number1()) || isNaN(number2())) {
   number1()+number2();
  }
  else { document.getElementById("resultado").innerText = "Error"
  }
} */

/* function Mistake() {
  if (isNaN(number1()) || isNaN(number2())) {
    document.getElementById("resultado").innerText = "Error, debes introducir dos números";
  }
}

Mistake(number1, number2) */

/* var mistake = number1()!==isNaN || number2()!==isNaN ? document.getElementById("resultado").innerText = "Error, debes introducir dos números" : console.log("funciona");
 */
