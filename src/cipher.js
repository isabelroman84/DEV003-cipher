const cipher = {
  //van los métodos del objeto cipher
  encode: function (offset, string) {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError();
    }

    let textoCodificado = ''; //devuelve el resultado de la función
    let code = '';
    let newCode = '';
    //console.log(string);

    //recorrer variable donde está guardado el mensaje
    for (let i = 0; i < string.length; i++) {
      code = string.charCodeAt(i);
      //console.log(code);
      //transformar letra a codigo ASCII con método JS
      if (code >= 65 && code <= 90) {
        //transformar letra ASCCI a alfabeto ABC
        newCode = (code - 65 + offset) % 26 + 65;
        //console.log(newCode);
      } else if (code === 32) {
        newCode = 32;
      }
      textoCodificado += String.fromCharCode(newCode); //así se van acumulando los caracteres de la cadena
    }
    return textoCodificado;
  }
}
//console.log(cipher.encode(3, 'ABC'));

//Hasta este punto me funciona la función codificar, cuando intento agregar algo más, se desactiva
//el keyup de las mayúsculas automáticas y ya no codifica. Por eso no pude hacer la parte del encode
// encode: function(offset, string) {
//let textoCodificado2 = '';
//let code2 = '';
//let newCode2 = '';
//for (let i = 0; i < string.length; i++) {
//code2 = string.charCodeAt(i);
//if (code >= 65 && code <= 90) {
//newCode2 += String.fromCharCode((code + 65 - offset) % 26 - 65);
//} else if (code === 32) {
//newCode2 = 32;
//}
//textoCodificado2 += String.fromCharCode(newCode2);
//}
//return textoCodificado;
//}
//}

export default cipher;
