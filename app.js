
let TotaldeFac=document.getElementById("TotaldeFac")


let cantidadPizza1=0;
let cantidadPizza2=0;
let cantidadPizza3=0;
let cantidadPizza4=0;
let cantidadPizza5=0;

let cantidadAcom1=0;
let cantidadAcom2=0;
let cantidadAcom3=0;
let cantidadAcom4=0;
let cantidadAcom5=0;

let cantidadBebida1=0;
let cantidadBebida2=0;
let cantidadBebida3=0;
let cantidadBebida4=0;


function pizza1() {
  cantidadPizza1 = document.getElementById("cantidadPizza1").value;

  alert("Haz seleccionado correctamente tu pizza");
}
function pizza2() {
  cantidadPizza2 = document.getElementById("cantidadPizza2").value;
  
  
  alert("Haz seleccionado correctamente tu pizza");
}
function pizza3() {
    cantidadPizza3 = document.getElementById("cantidadPizza3").value;
    
    
    alert("Haz seleccionado correctamente tu pizza");
}
  function pizza4() {
    cantidadPizza4 = document.getElementById("cantidadPizza4").value;
   
    
    alert("Haz seleccionado correctamente tu pizza");
}
function pizza5() {
    cantidadPizza5 = document.getElementById("cantidadPizza5").value;
  
    
    alert("Haz seleccionado correctamente tu pizza");
  }


function acom1(){
  cantidadAcom1=document.getElementById("cantidadAcom1").value;
  alert("Haz seleccionado correctamente tu Acompañante");
}
function acom2(){
  cantidadAcom2=document.getElementById("cantidadAcom2").value;
  alert("Haz seleccionado correctamente tu Acompañante");
}
function acom3(){
  cantidadAcom3=document.getElementById("cantidadAcom3").value;
  alert("Haz seleccionado correctamente tu Acompañante");
}
function acom4(){
  cantidadAcom4=document.getElementById("cantidadAcom4").value;
  alert("Haz seleccionado correctamente tu Acompañante");
}
function acom5(){
  cantidadAcom5=document.getElementById("cantidadAcom5").value;
  alert("Haz seleccionado correctamente tu Acompañante");
}

function obtenerCantidadBebi1() {
  cantidadBebida1 = document.getElementById("cantidadBebi1").value;
  alert("Haz seleccionado correctamente tu Bedida");
}

function obtenerCantidadBebi2() {
  cantidadBebida2 = document.getElementById("cantidadBebi2").value;
  alert("Haz seleccionado correctamente tu Bedida");
}

function obtenerCantidadBebi3() {
  cantidadBebida3 = document.getElementById("cantidadBebi3").value;
  alert("Haz seleccionado correctamente tu Bedida");
}

function obtenerCantidadBebi4() {
  cantidadBebida4 = document.getElementById("cantidadBebi4").value;
  alert("Haz seleccionado correctamente tu Bedida");
}




function calcularTotal() {
  // Calcula el total de las pizzas
  let totalPizza1 = cantidadPizza1 * 20000;
  let totalPizza2 = cantidadPizza2 * 30000;
  let totalPizza3 = cantidadPizza3 * 25000;
  let totalPizza4 = cantidadPizza4 * 12000;
  let totalPizza5 = cantidadPizza5 * 22000;

  // Calcula el total de los acompañamientos
  let totalAcom1 = cantidadAcom1 * 3000;
  let totalAcom2 = cantidadAcom2 * 7000;
  let totalAcom3 = cantidadAcom3 * 4500;
  let totalAcom4 = cantidadAcom4 * 4000;
  let totalAcom5 = cantidadAcom5 * 2000;

  // Calcula el total de las bebidas
  let totalBebi1 = cantidadBebida1 * 3000;
  let totalBebi2 = cantidadBebida2 * 5000;
  let totalBebi3 = cantidadBebida3 * 9000;
  let totalBebi4 = cantidadBebida4 * 4000;

  // Suma de los totales de pizzas, acompañamientos y bebidas
  let totalPizza = totalPizza1 + totalPizza2 + totalPizza3 + totalPizza4 + totalPizza5;
  let totalAcom = totalAcom1 + totalAcom2 + totalAcom3 + totalAcom4 + totalAcom5;
  let totalBebi = totalBebi1 + totalBebi2 + totalBebi3 + totalBebi4;

  // Total general
  let total = totalAcom + totalBebi + totalPizza;

  // Muestra el total en el elemento con id `TotaldeFac`
  TotaldeFac.innerHTML = `${total}`;
}