const cipher = {
  //van los métodos del objeto cipher
  encode: function(offset, string) {
    
    if(typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError();
    } 

    const textoCodificado = '';
    const offsetNumber = parseInt(offset);
    
    //recorrer variable donde está guardado el mensaje
    for(let i = 0; i < string.length; i++) {
      const code = string.charCodeAt(i);
      const message = string[i];
      //transformar letra a codigo ASCII con método JS
      if(code >= 65 && code <= 90) {
      //return (((code - 65) + offsetNumber) % 26) + 65;
        //return textoCodificado += String.fromCharCode(message);
        //transformar letra ASCCI a alfabeto ABC
        //String.charcode
        //textoCodificado += message;    
      } 
      //return textoCodificado;
      console.log(message, code);  
    }
  }
} 

//Quiero definir una excepción (throw) de que los datos que ingresen sean letras y números donde corresponde
//entonces si ingresan algo !== arrojará error. El new se usa para invocar una función y crear un objeto que es el TypeError
    

export default cipher;
