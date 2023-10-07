// Este archivo tendrá toda la manipulación de los productos, como agregar, eliminar, editar, etc. Para esto, se creará un array de productos, y se definirá una función para agregar productos a este array. Para esto, se creará un archivo product.service.ts en la carpeta products, y se importará en el archivo product.model.ts.

import { ProductInterface } from './product.model';

export const products: ProductInterface[] = [];                   // Usamos la 'Interfaz' importada desde el archivo product.model.ts para definir el tipo de datos de este array.

export const addProduct = (data: ProductInterface) => {
  products.push(data);
}