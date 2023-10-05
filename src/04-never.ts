// El 'never' type usa para funciones que nunca van a terminar o que detienen el programa en este caso seria en un loop infinito
const withoutEnd = () => {                            // Cuando paso encima el curso sobre la función VSCode me dice que el tipo de dato es 'never' porque nunca termina de ejecutarse
  while(true) {
    console.log('Never stop learning')
  }
}


const fail = (message: string) => {                   // Esta función nunca va a terminar de ejecutarse porque siempre va a lanzar un error por eso VSCode tambien me dice que el tipo de dato es 'never'
  throw new Error(message);                           // El 'throw' es para lanzar un error y el 'new Error()' es para crear un nuevo error, el parametro que recibe es el mensaje que va a mostrar el error
}

const example = (input: unknown) => {                 // Función que recibe un parametro de tipo 'unknown' y retorna un string o un error dependiendo del tipo de dato que reciba
  if(typeof input === 'string') {                     // Verifico si el tipo de dato es un string
    return 'Es un string';
  } else if(Array.isArray(input)) {                   // De esta manera podemos verificar si el tipo de dato es un array
    return 'Es un array';
  }
  return fail('No se que es esto')                    // Si el dato que recibimos no es un string o un array entonces lanzamos un error de la función 'fail()'
}

console.log(example('Hola'));
console.log(example([1,1,1,1]));
console.log(example(1212));                           // Al ejecutar la función con el argumento '1212' me va a lanzar un error porque no esta definido en la función y la función 'fail()' siempre va a lanzar un error y se termina la ejecución del programa
console.log(example('Hola, despues del error y función "fail()"'));

