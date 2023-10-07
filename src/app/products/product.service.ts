// Este archivo tendrá toda la manipulación de los productos, como agregar, eliminar, editar, etc. Para esto, se creará un array de productos, y se definirá una función para agregar productos a este array. Para esto, se creará un archivo product.service.ts en la carpeta products, y se importará en el archivo product.model.ts.

import { ProductInterface } from './product.model';

export const products: ProductInterface[] = [];                   // Usamos la 'Interfaz' importada desde el archivo product.model.ts para definir el tipo de datos de este array.

export const addProduct = (data: ProductInterface) => {
  // data.id = 'sadfare4445';                                     // Como este atributo esta definido como 'readonly' en el BaseModel, no podemos modificarlo y si intentamos modificarlo, nos dará un error.
  // data.createdAt = new Date(1999, 1, 1);                       // Esto tambien marca error porque el atributo esta definido como 'readonly' en el BaseModel.
  products.push(data);
}