function esComentarioEnLinea(cadena) {
   
    cadena = cadena.trim();
  
    if (cadena.startsWith("//")) {
      return true;
    }
  
   
    const indiceComentario = cadena.indexOf("//");
    if (indiceComentario !== -1) {
      return true;
    }
  
    return false;
  }
  
function esComentarioEnBloque(cadena){

  cadena = cadena.trim();

  return cadena.startsWith("/*") && cadena.endsWith("*/");

}


function main() {
  //console.log(esComentarioEnLinea("// Esto es un comentario")); // true
  //console.log(esComentarioEnLinea("int x = 5; // comentario")); // true
  //console.log(esComentarioEnLinea("int x = 5;"));               // false
  console.log(esComentarioEnBloque("/* comentario de bloque */"));     // true
  console.log(esComentarioEnBloque("int x = 5; /* comentario */"));    // false
  console.log(esComentarioEnBloque("/* comentario */ int x = 5;"));    // false
  console.log(esComentarioEnBloque("/* multilinea \n comentario */")); // true
}

main();
