function esSeparadorComa(texto) {
    // Si el texto está vacío, retornamos false
    if (!texto || texto.trim() === '') {
      return false;
    }
    
    // Validamos que el string no empiece ni termine con coma
    if (texto.trim().startsWith(',') || texto.trim().endsWith(',')) {
      return false;
    }
    
    // Dividimos por comas para verificar cada elemento
    const elementos = texto.split(',');
    
    // Verificamos cada elemento
    for (let elemento of elementos) {
      const elementoTrimmed = elemento.trim();
      
      // Si el elemento está vacío (comas consecutivas)
      if (elementoTrimmed === '') {
        return false;
      }
      
      // Verificamos si hay espacios dentro del elemento (no solo al inicio o final)
      // Si tiene espacios internos, el formato es incorrecto
      if (elementoTrimmed.includes(' ')) {
        return false;
      }
      
      // Otra forma de verificar espacios internos
      // Si al quitar espacios iniciales y finales, aún quedan espacios
      if (elemento !== elementoTrimmed && elementoTrimmed.length > 0) {
        // Verificamos si los espacios solo están al inicio o al final
        const soloEspaciosExtremos = 
          elemento.startsWith(' ') && elemento.trimStart() === elementoTrimmed ||
          elemento.endsWith(' ') && elemento.trimEnd() === elementoTrimmed ||
          (elemento.startsWith(' ') && elemento.endsWith(' ') && 
           elemento.trim() === elementoTrimmed);
        
        // Si hay espacios que no están en los extremos, es formato incorrecto
        if (!soloEspaciosExtremos) {
          return false;
        }
      }
    }
    
    // Si hay un espacio que no esté alrededor de una coma, es formato incorrecto
    // Esto detectaría "palabra palabra" o "palabra    palabra"
    const sinComas = texto.replace(/\s*,\s*/g, ',');
    if (sinComas.includes(' ')) {
      return false;
    }
    
    // Si pasó todas las validaciones, el formato es correcto
    return true;
  }


  function main() {
     
  // Ejemplos de uso
console.log("Formato correcto:", esSeparadorComa("manzana,uva,pera"));  // true
console.log("Formato correcto:", esSeparadorComa("1 , 2  ,  3, 4"));    // true
console.log("Formato correcto:", esSeparadorComa("hola,chao"));         // true

console.log("Formato incorrecto:", esSeparadorComa(", hola, chao"));    // false (empieza con coma)
console.log("Formato incorrecto:", esSeparadorComa("hola,chao,"));      // false (termina con coma)
console.log("Formato incorrecto:", esSeparadorComa("palabra,,palabra")); // false (comas consecutivas)
console.log("Formato incorrecto:", esSeparadorComa("hola chao"));       // false (espacio sin coma)
console.log("Formato incorrecto:", esSeparadorComa("palabra    con   espacio, otra")); // false (espacio dentro de palabra)
console.log("Formato incorrecto:", esSeparadorComa(""));        
  }
  
  main();
  