// En este ejemplo se usa 'ReadonlyArray' para definir el tipo de datos de un array de números, y se usa 'Readonly' para definir el tipo de datos de un objeto de tipo 'ReadonlyArray'.
// Al aplicar 'Readonly' a un array, esto significa que el array será de solo lectura, y no se podrá modificar, si se intenta modificar, se mostrará un error.
// Esto con el fin de no permitir acciones mutables en el array, y solo permitir acciones inmutables en el array.

const numbers: ReadonlyArray<number> = [1,2,2,2];


// Estos metodos son mutables, y al aplicar 'Readonly' a un array, esto significa que el array será de solo lectura, y no se podrá modificar, si se intenta modificar, se mostrará un error.
// numbers.push(9);
// numbers.pop();
// numbers.unshift(1);


// Estos metodos son inmutables, lo que siginifica que crean un nuevo array, y no modifican el array original por lo tanto no muestra error al aplicar 'Readonly' a un array.
numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => 0);