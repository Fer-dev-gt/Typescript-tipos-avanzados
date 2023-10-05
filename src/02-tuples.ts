// Array de number y string
const prices: (number | string)[] = [1,3,2,2,2, 'as'];

// Forma de declarar una Tupla
const user: [string, number] = ['Fernando', 36];

// Otra forma de declarar una Tupla
let user2: [string, number];
user2 = ['Fernando', 36];
user2 = ['Alejandro', 22];
// user2 = ['Fernando', 36, true];                // Error, falla porque estamos agregando un valor booleano a la Tupla el cual no está definido en la Tupla
// user2 = [36, 'Fernando'];                      // Error, falla porque estamos cambiando el orden de los valores de la Tupla, primero va el string y luego el number
// user2 = [];                                    // Error, falla porque estamos agregando un arreglo vacío a la Tupla y no 2 valores como está definido en la Tupla
// user2 = ['Fernando'];                          // Error, falla porque estamos agregando solo un valor a la Tupla y no 2 como está definido en la Tupla


// Haciendo destructuración de una Tupla
let user3: [string, number, boolean];             // Definimos la Tupla y los valores que va a tener con su orden de valores definidos
user3 = ['Fernando', 36, true];                   // Le asignamos los valores a la Tupla
const [username, age] = user3;                    // Hacemos la 'Destructuración' de la Tupla, en este caso solo estamos extrayendo los valores de la Tupla y asignandolos a las variables username y age, para luego poder usarlas sin necesidad de usar el arreglo user3
console.log(username);                            // Imprimimos el valor de la variable username, el cual es el primer valor de la Tupla user3 que 'destructuramos'
console.log(age);
user3.push(22);                                   // Agregamos un nuevo valor a la Tupla user3, esto deberia marcar error porque la Tupla user3 solo tiene definidos 3 valores y no 4, pero no marca error porque en TypeScript no se puede hacer la 'Destructuración' de una Tupla y luego agregarle nuevos valores, esto es una limitación de TypeScript
