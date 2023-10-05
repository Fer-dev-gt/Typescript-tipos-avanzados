// Ejemplo de las deventajas de usar 'any'

let anyVar: any;                                    // Se puede asignar cualquier tipo de dato a 'anyVar' y no da error pero es una practica mala porque puede causar errores en tiempo de ejecucion
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;                        // No da error porque anyVar es de tipo 'any', esto es mala practica ya que el ultimos valor de 'anyVar' fue un objeto y no un booleano lo cual puede causar errores en tiempo de ejecucion

anyVar.doSomething();                               // No marca error aunque no sabemos que tipo de dato es 'anyVar' y no sabemos si tiene el metodo 'doSomething' asi que puede causar errores en tiempo de ejecucion
anyVar.toUpperCase();                               // No marca error aunque no sabemos que tipo de dato es 'anyVar' y no sabemos si tiene el metodo 'toUpperCase' asi que puede causar errores en tiempo de ejecucion


// Ejemplo de las ventajas de usar 'unknown' y porque es mejor que usar 'any'

let unknownVar: unknown;                            // Se usa 'unknown' en vez de 'any' porque 'unknown' es mas restrictivo que 'any' y nos pide que hagamos una validacion antes de usarlo para ver que tipo de dato es
unknownVar = true;                                  // Podemos asignarle cualquier tipo de dato a 'unknownVar' pero no podemos usarlo hasta que no hagamos una validacion
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

unknownVar.doSomething();                           // Da error porque no se sabe que tipo de dato es 'unknownVar' asi que no se puede aplicar un metodo que esta diseñado para tipos de datos que tienen el metodo 'doSomething'

if (typeof unknownVar === 'string') {               // Validamos que 'unknownVar' sea de tipo 'string' antes de usarlo
  unknownVar.toUpperCase();                         // Ahora ya no marca error porque se sabe que 'unknownVar' es de tipo 'string'
}

let isNew2: boolean = unknownVar;                   // Da error porque no se sabe que tipo de dato es 'unknownVar' no sabemos si el valor es de tipo 'boolean' asi que no se puede asignar a una variable de tipo 'boolean'

if(typeof unknownVar === 'boolean') {               // Validamos que 'unknownVar' sea de tipo 'boolean' antes de usarlo
  let isNew2: boolean = unknownVar;                 // Funciona porque se sabe que 'unknownVar' es de tipo 'boolean'
}

const parse = (str: string): unknown => {           // Tambien podemos aplicar 'unknown' a funciones que no sabemos que tipo de dato van a retornar, es esta caso esperamos que nos devuelva un objeto stringificado en formato JSON pero nada nos asegura que asi sea
  return JSON.parse(str);                           // Retornamos el resultado de la funcion 'JSON.parse' que es de tipo 'any' pero como 'unknown' es mas restrictivo que 'any' no da error
}

// El formato JSON seria asi: '{"name": "Luis"}'