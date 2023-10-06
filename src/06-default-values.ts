// Ejemplo del uso de parametros con valores por defecto en Typescript y valore por defecto, esto es una alternativa a los 'optionals' y al operador '??'
export const createProductNullish = (
  id: string | number,
  isNew: boolean = true,                              // El signo de igual indica que el parámetro es opcional y tiene un valor por defecto
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew
  };
}

const product = createProductNullish(1, true, 12);            // El output es { id: 1, stock: 12, isNew: true }
console.log(product);

const product2 = createProductNullish(1);                     // El output es { id: 1, stock: 10, isNew: true } (Se aplican los valores por defecto ya que 'undefined' es 'nullish')
console.log(product2);

const product3 = createProductNullish(1, false, 0);           // El output es { id: 1, stock: 0, isNew: false } (no se aplican los valores por defecto ya que no son 'nullish')
console.log(product3);

const product4 = createProductNullish(1, true, 100);          // El output es { id: 1, stock: 100, isNew: true } (no se aplican los valores por defecto ya que no son 'nullish')
console.log(product4);

const product5 = createProductNullish(5, false);              // El output es { id: 5, stock: 10, isNew: false } (Se aplican los valores por defecto ya que 'undefined' es 'nullish')
console.log(product5);



// Objeto como parametro con valores por defecto
export const createProductV2 = (data: {
  id: string | number;
  stock?: number;                                               // Aqui no se puede definir un valor por defecto
  isNew?: boolean;
}) => {
  const { id, stock = 0, isNew = true } = data;                 // Desestrcturamos data y aqui mismo asignamos los valores por defecto. Existen muchas formas de asignar parametros por defecto en un parametro de tipo objeto.
  return {
    id,
    stock,
    isNew,
  };
};
