//alert('hola');
import cipher from './cipher.js';

document.getElementById('mensaje').addEventListener('keyup', mayus);
function mayus() {
  const mayusc = document.getElementById('mensaje');
  mayusc.value = mayusc.value.toUpperCase();
}

//declarar variable para almacenar funcionalidad en botón cifrar, asociado con valor del input ingresado por el usuario
const btnEncriptar = document.getElementById('cifrar');
btnEncriptar.addEventListener('click', encriptarMensaje); //parámetros: cuál evento y en qué variable
//tomar valor del input y guardar en una variable el mensaje para que al hacer click tome ese valor
function encriptarMensaje() {
  const offset = parseInt(document.getElementById('offset').value); //value me muestra lo que el usuario ingresó
  const mensaje = document.getElementById('mensaje').value;
  const mensajeFin = document.getElementById('mensajeFin');
  mensajeFin.value = cipher.encode(offset, mensaje); //asigné el valor del cipher.encode al mensaje codificado

}
const btnDesencriptar = document.getElementById('descifrar');
btnDesencriptar.addEventListener('click', desencriptarMensaje);

function desencriptarMensaje() {
  const offset = parseInt(document.getElementById('offset').value);
  const mensaje = document.getElementById('mensaje').value;
  const mensajeFin = document.getElementById('mensajeFin');
  mensajeFin.value = cipher.decode(offset, mensaje);
}
//console.log(cipher);
