// Plantameiento de un problema que puede ser resuelto usando la 'sobrecarga de funciones'

// El comportamiento de nuestra función 'parseStr' en terminos de input/output es el siguiente:
// Fernando => [F,E,R,N,A,N,D,O]   |   string => string[]
// [F,E,R,N,A,N,D,O] => Fernando   |   string[] => string


// La 'sobrecarga de funciones' solo funciona en funciones declarados con la palabra reservada 'function', no se puede con funciones flecha o guardadas en una variable
function parseStr(input: string | string[]): string | string[] {      // Definimos una función que recibe como parámetro un string o un array de strings y devuelve un string o un array de strings
  if(Array.isArray(input)) {                                          // Validamos si el parámetro recibido es un array
    return input.join('');                                            // Entonces retornamos un string
  } else {                                                            // Si no es un Array, entonces es un string
    return input.split('');                                           // Entonces retornamos un array de strings[]
  }
}


// El problema de esta funciona en la cual AUN NO HEMOS APLICADO LA SOBRECARGA DE FUNCIONES es que si queremos usar los métodos de los arrays o de los strings, no podemos porque el tipo de dato que devuelve la función es 'string | string[]' y no 'string' o 'string[]' asi que VSc nos va a marcar error si queremos usar los métodos de los arrays o de los strings
const rtaArray = parseStr('Fernando');                               // El output de la función es un string o un array de strings, lo cual genera un error en VScode
console.log('parseArray', 'Fernando =>', rtaArray);
rtaArray.reverse();                                                  // Aunque YO sé que el output es un Array, VScode no lo sabe y por eso marca error cuando quiero usar el método 'reverse' de los arrays, tendriamos que hacer una validación de tipos para que VScode no marque error
if(Array.isArray(rtaArray)) {                                        // Para poder usar el método 'reverse' de los arrays, tenemos que validar si el output de la función es un array
  rtaArray.reverse();                                                // Ahora TypeScript ya no marca error porque ya validamos que el output de la función es un array
}


const rtaStr = parseStr(['F','e','r','n','a','n','d','o']);
rtaStr.toLowerCase();                                                 // Al igual que con el otro ejemplo TypeScript no sabe si el output de la función es un string o un array de strings, asi que marca error cuando queremos usar el método 'toLowerCase' de los strings
if(typeof rtaStr === 'string') {                                      // Para poder usar el método 'toLowerCase' de los strings, tenemos que validar si el output de la función es un string
  rtaStr.toLowerCase();                                               // Ahora TypeScript ya no marca error porque ya validamos que el output de la función es un string
}
console.log('parseStr', '[F, e, r, n, a, n, d, o] =>', rtaStr);


// Este solo es el plantamiento del problema, la solución esta en el archivo '09-overload.ts'