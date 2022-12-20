const cipher = {
  //van los métodos del objeto cipher
  encode: function (offset, message) {
    if (typeof offset !== 'number' || typeof message !== 'string') {
      throw new TypeError();
    }

    let textoCodificado = ''; //devuelve el resultado de la función
    let code = '';
    let newCode = '';
    //console.log(string);

    //recorrer variable donde está guardado el mensaje
    for (let i = 0; i < message.length; i++) {
      code = message.charCodeAt(i);
      //transformar letra a codigo ASCII con método JS
      if (code >= 65 && code <= 90) {
        //transformar letra ASCCI a alfabeto ABC
        newCode = (code - 65 + offset) % 26 + 65;
        //console.log(newCode);
      } else if (code < 65 || code > 90) {
        newCode = 0 + code;
      }
      textoCodificado += String.fromCharCode(newCode); //así se van acumulando los caracteres de la cadena
    }
    return textoCodificado;
  },
  decode: function (offset, message) {
    if (typeof offset !== 'number' || typeof message !== 'string') {
      throw new TypeError();
    }

    let textoDecodificado = '';
    let code = '';
    let newCode = '';
    for (let i = 0; i < message.length; i++) {
      code = message.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        newCode = ((code + 65 - offset) % 26 + 65);
      } else if (code < 65 || code > 90) {
        newCode = 0 + code;
      }
      textoDecodificado += String.fromCharCode(newCode);
    }
    return textoDecodificado;
  }
}
export default cipher;
