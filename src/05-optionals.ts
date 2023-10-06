// Ejemplo de uso de 'optionals' en Typescript y valore por defecto usando el operador '||'
export const createProduct = (
  id: string | number,
  isNew?: boolean,                              // El signo de interrogación indica que el parámetro es opcional
  stock?: number                                // Siempre hay dejar los parámetros opcionales al final de la lista de parámetros
) => {
  return {
    id,
    stock: stock || 10,                         // Si no se pasa el parámetro 'stock' se asigna el valor por defecto 10, esto tiene el riesgo de tomar el valor 0 como falso y "" como falso
    isNew: isNew || true,
  };
}


// Ejemplo del uso de 'optionals' en Typescript y valore por defecto usando el operador '??' el cual nos evita el problema de tomar el valor 0 como falso y "" como falso
export const createProductNullish = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,                         // Si no se pasa el parámetro 'stock' se asigna el valor por defecto 10, si mandamo "" o 0 se asigna el valor enviado ya que no son valores 'nullish'
    isNew: isNew ?? true,
  };
}

const product = createProductNullish(1, true, 12);            // El output es { id: 1, stock: 12, isNew: true }
console.log(product);

const product2 = createProductNullish(1);                     // El output es { id: 1, stock: 10, isNew: true } (valores por defecto ya que 'undefined' es 'nullish')
console.log(product2);

const product3 = createProductNullish(1, false, 0);           // El output es { id: 1, stock: 0, isNew: false } (no son 'nullish')
console.log(product3);



// Otra forma de hacerlo es de la siguiente manera al usar valores por defecto en los parámetros de la función
const createProduct2 = (id: string | number, isNew: boolean = true, stock: number = 10) => ({id, stock, isNew})

const p1 = createProduct2(1, true, 12)                        // El output es { id: 1, stock: 12, isNew: true }
console.log(p1)
const p2 = createProduct2(1)                                  // El output es { id: 1, stock: 10, isNew: true } (valores por defecto ya que 'undefined' es 'nullish')
console.log(p2)
const p3 = createProduct2(1, false, 0)                        // El output es { id: 1, stock: 0, isNew: false } (no son 'nullish')
console.log(p3)
