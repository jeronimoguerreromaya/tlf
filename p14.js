function esCadenaCaracteres(texto) {
    //La cadena al menos debe tener dos caracteres  
    if (texto.length < 2) {
        return false;
      }
    //Se guardan el primer caracter y el ultimo  
    const primerCaracter = texto[0]; 
    const ultimoCaracter = texto[texto.length - 1];

    //Verificar si cominza en " y termina en "
    if(primerCaracter === '"' && ultimoCaracter === '"'){
           
        for (let i = 1; i < texto.length - 1; i++) {
            if (texto[i] === '\\') {           
                if (i === texto.length - 2) {
                    console.log("Error: El carácter de escape \\ no puede ser el último carácter antes de la comilla de cierre");
                    return false;
                }
                const siguienteCaracter = texto[i + 1];
                const caracteresValidos = ['n', 't', '\\', '"', '0'];
                //Verificar si el siguinte campo es un caracter expecial
                if (!caracteresValidos.includes(siguienteCaracter)) {
                console.log(`Error: Secuencia de escape inválida \\${siguienteCaracter} en la posición ${i}`);
                return false;
            }
            i++;
            }
            
        }
        return true;
  
      }else{
        //No es cadena
        return false;
      }
      
  }

  function main() {
    var cadena = '"hola q mas\n"';
    var cadena1 = '"hola \\nq mas"';
    var cadena2 = '"hola \\t\\q mas"';
    var cadena3 = '"hola \\\\q mas"';
    var cadena4 = '"hola \\"q mas"';
    var cadena5 = '"hola \\0q mas"';
    var cadena6 = '"hola \\"q \t mas"';
 
    console.log(esCadenaCaracteres(cadena)+" La cadena es "+cadena+"\n");
    console.log(esCadenaCaracteres(cadena1)+" La cadena es "+cadena1+"\n");
    console.log(esCadenaCaracteres(cadena2)+" La cadena es "+cadena2+"\n");
    console.log(esCadenaCaracteres(cadena3)+" La cadena es "+cadena3+"\n");
    console.log(esCadenaCaracteres(cadena4)+" La cadena es "+cadena4+"\n");
    console.log(esCadenaCaracteres(cadena5)+" La cadena es "+cadena5+"\n");
   console.log(esCadenaCaracteres(cadena6)+" La cadena es "+cadena6+"\n");
  }
  
  main();
  