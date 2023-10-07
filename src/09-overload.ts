// Solución al problema planteado en el archivo '08-overload.ts' usando la 'sobrecarga de funciones'

// Fernando => [F,E,R,N,A,N,D,O]   |   string => string[]
// [F,E,R,N,A,N,D,O] => Fernando   |   string[] => string

// Función anterior a la 'sobrecarga de funciones'
// export function parseStr(input: string | string[]): string | string[] {
//   if(Array.isArray(input)) {
//     return input.join('');          // string
//   } else {
//     return input.split('');         // string[]
//   }
// }


// Cuando hacemos una 'sobrecarga de funciones' tenemos que definir la función varias veces, cada vez con un tipo de dato diferente, y la última vez que definimos la función es la que va a tener la implementación de la función
// Definimos que cuando al un cierto tipo de dato en el input habrá un cierto tipo de dato en el output, usamos 'export' para poder usar la función en otros archivos y no nos marque error
export function parseStr(input: string): string[];                    // Cuando le mandamos un: string => string[]
export function parseStr(input: string[]): string;                    // Cuando le mandamos un: string[] => string
export function parseStr(input: number): boolean;                     // Cuando le mandamos un: number => boolean

export function parseStr(input: unknown): unknown {                   // Ahora que ya hicimos una 'sobrecarga de funciones' podemos definir esta ultima función de forma más 'genérica' y que reciba cualquier tipo de dato, y que devuelva cualquier tipo de dato, esto con el fin de si en el futuro queremos agregar más tipos de datos a la función, no tengamos que modificar las funciones anteriores, solo agregamos una nueva función con el nuevo tipo de dato y listo
  if(Array.isArray(input)) {                                          // Validamos si el input es un array
    return input.join('');
  } else if (typeof input === 'string') {                             // Validamos si el input es un string
    return input.split('');
  } else if (typeof input === 'number') {                             // Validamos si el input es un number
    return true;
  }
}



const rtaArray = parseStr('Fernando');
rtaArray.reverse();                                                   // Ahora TypeScript ya no marca error porque ya validamos que el output de la función SI es un array, por lo tanto ya podemos usar los métodos de los arrays
console.log('parseArray', 'Fernando =>',rtaArray);                    // Ya no es necesario hacer una 'aserción de tipos' para poder usar los métodos de los arrays

const rtaStr = parseStr(['F','e','r','n','a','n','d','o']);
rtaStr.toLowerCase()                                                  // Ahora TypeScript ya no marca error porque ya validamos que el output de la función SI es un string, por lo tanto ya podemos usar los métodos de los strings
console.log('parseStr', '[F, e, r, n, a, n, d, o] =>', rtaStr);       // Ya no es necesario hacer una 'aserción de tipos' para poder usar los métodos de los strings


const rtaBoolean = parseStr(123);                                     // Como mandamos un 'number' a la función, la función va a devolver un 'boolean', esto gracias a la 'sobercarga de funciones'