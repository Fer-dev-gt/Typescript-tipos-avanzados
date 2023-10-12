// Este archivo tendrá toda la manipulación de los productos, como agregar, eliminar, editar, etc. Para esto, se creará un array de productos, y se definirá una función para agregar productos a este array. Para esto, se creará un archivo product.service.ts en la carpeta products, y se importará en el archivo product.model.ts.

import { ProductInterface } from './product.model';
import { CreateProductDTO, UpdateProductDTO } from './product.dto';
import { faker } from '@faker-js/faker';                              // Acá tambien importamos la librería 'faker' para generar datos aleatorios de los productos en este archivo para que solo aqui se generen los datos en este archivo que se encarga de esta sola responsabilidad.

export const products: ProductInterface[] = [];                       // Usamos la 'Interfaz' importada desde el archivo product.model.ts para definir el tipo de datos de este array.

export const addProduct = (data: CreateProductDTO) : ProductInterface => {     // Definimos una función que recibe un objeto con la estructura de un producto, y retorna un objeto con la estructura de un producto. Esta función recibe un objeto con la estructura de un producto, y lo agrega al array de productos.
  const newProduct = {                                                         // Creamo un DTO que significa 'Data Transfer Object' que es un objeto que se usa para transferir datos entre diferentes capas de una aplicación. En este caso, usamos un DTO para transferir los datos de un producto desde el archivo product.service.ts hasta el archivo main.ts.
    ...data,                                                                   // Usamos el 'Spread Operator' para copiar todas las propiedades del objeto 'data' que se recibe como parámetro en la función addProduct(), y agregarlas al objeto 'newProduct'.
    id: faker.string.uuid(),                                                   // Agregamos el resto de propiedades que no se reciben como parámetro en la función addProduct(), y las generamos con la librería 'faker'. Si no cumple con el tipado definido en la interfaz ProductInterface, se mostrará un error.
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }

  products.push(newProduct);                                          // Agregamos el objeto 'newProduct' al array de productos.
  return newProduct;                                                  // Retornamos el objeto nuevo 'newProduct'.
}




export const updateProduct = (id: string, changes: UpdateProductDTO): ProductInterface => {           // Esta función recibe el id del producto que queremos actualizar, y un objeto con las propiedades que queremos actualizar y retorna un objeto con la estructura de un 'ProductInterface'.
  const index = products.findIndex(item => item.id === id);               // Seleccionamos y guardamos el index del producto que queremos actualizar, esto con la ayuda del método findIndex() de JavaScript, el cual recibe una función como parámetro, y esta función recibe un parámetro que es el item del array, y retorna un booleano, si retorna 'true' significa que el item cumple con la condición, y si retorna 'false' significa que el item no cumple con la condición. En este caso, la condición es que el id del item sea igual al id que se recibe como parámetro en la función updateProduct().
  const prevData = products[index];                                       // Seleccionamos y guardamos el producto que queremos actualizar, esto con la ayuda del index que obtuvimos en la linea anterior.
  products[index] = {                                                     // Actualizamos el producto que queremos actualizar, esto con la ayuda del index que obtuvimos en la linea anterior.
    ...prevData,                                                          // Usamos "destructuring" para copiar todas las propiedades del producto que queremos actualizar, y agregarlas al objeto 'products[index]'.
    ...changes                                                            // Usamos "destructuring" para copiar todas las propiedades del objeto 'changes' que se recibe como parámetro en la función updateProduct(), y agregarlas al objeto 'products[index]'.
  }                                                                       // Si solo mando '...changes' sin '...prevData', solo se actualizarán las propiedades que se reciban como parámetro en la función updateProduct(), y las demás propiedades no se actualizarán.
  return products[index];                                                 // Retornamos el producto actualizado.
}