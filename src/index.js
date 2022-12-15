//alert('hola');
import cipher from './cipher.js';
//declarar variable para almacenar funcionalidad en botón cifrar, asociado con valor del input ingresado por el usuario
const btnEncriptar = document.getElementById('cifrar');
btnEncriptar.addEventListener('click', encriptarMensaje); //parámetros: cuál evento y en qué variable
//tomar valor del input y guardar en una variable el mensaje para que al hacer click tome ese valor
function encriptarMensaje() {
  const offset = parseInt(document.getElementById('offset').value); //value me muestra lo que el usuario ingresó
  const mensaje = document.getElementById('mensaje').value;
  const mensajeFin = document.getElementById('mensajeFin');
  msjForEncript = cipher.encode(offset, mensaje.toUpperCase()); //almacené el método del objeto cipher en una variable

  msjForEncript = mensajeFin.value;
  
  //console.log(typeof(encriptarMensaje));
}

console.log(cipher);
