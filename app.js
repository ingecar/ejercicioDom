/**
 * Manipulacion del DOM
 */

// document.querySelector('p') = 'Hello';
// document.querySelectorAll() = '';

// Manejo de eventos mouse
// click
// dbclick
// mouseover
// mouseout
// mousedown
// mouseup

// Manejo de eventos mouse
// keydown
// keyup

// Seleccionar elementos del DOM
// document.getElementById('demo').innerHTML = 'Hello';
// document.getElementsByClassName('demo').innerHTML = 'Hello';
// document.getElementsByTagName('h4') = 'Hello';

// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.window);
// console.log(document.styleSheets);

let elementoId = document.getElementById("titulo");
// console.log(elementoId);

let elementoId2 = document.getElementById("contenido");
// console.log(elementoId2);

let opid = document.getElementById("p1");
opid.innerHTML = "Javascript";

let opid2 = document.getElementById("p2");
opid2.innerHTML = "C++";

let elementoClase = document.getElementsByClassName("lista");
// console.log(elementoClase);

// selector por nombre de etiqueta
let elementoTag = document.getElementsByTagName("h1");
// console.log(elementoTag);

// let elementQ = document.querySelector("ul");
let elementQ1 = document.querySelector("#titulo");
// console.log(elementQ.childElementCount);
// console.log(elementQ.children[2]);
// console.log(elementQ1);
// console.log(elementQ.firstElementChild);

// Ejemplo encontrar los parrafos e imprimir su contenido
let elementoP = document.getElementsByTagName("p");
// console.log(elementoP.length);
// for (let i = 0; i < elementoP.length; i++) {
//   console.log(elementoP[i].textContent);
// }

elementoP[2].innerHTML = "Test";
opid2.style.background = "black";
opid2.style.color = "red";
opid2.style.borderRadius = "8px";
opid2.style.textAlign = "center";

let verFecha = () => {
  let fec = document.getElementById("resultado");
  fec.innerHTML = new Date();
};
let quitarFecha = () => {
  let fec = document.getElementById("resultado");
  fec.innerHTML = "Fecha";
};

let temperatura = () => {
  let tmp = parseFloat(document.getElementById("dato1").value);
  let calculo = tmp - 273.5;
  alert(`La conversion es: ${calculo}`);
  let res = (document.getElementById(
    "res"
  ).innerHTML = `Resultado: ${calculo}`);
};
