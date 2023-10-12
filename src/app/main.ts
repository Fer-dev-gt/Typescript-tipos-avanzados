// En este archivo se ejecuta la función addProduct() que esta definida en el archivo product.service.ts, esta función recibe un objeto con la estructura de un producto, y lo agrega al array de productos.

import { addProduct, products } from "./products/product.service";           // Importamos la función addProduct() y el array de productos desde el archivo product.service.ts.
import { faker } from '@faker-js/faker';                                     // Importamos la librería 'faker' para generar datos aleatorios de los productos para hacer pruebas.

for (let index = 0; index < 50; index++) {                                   // Definimos un ciclo 'for' para ejecutar la función addProduct() 50 veces.
  addProduct({                                                               // Ejecuto la función addProduct() que esta definida en el archivo product.service.ts, esta función recibe un objeto con la estructura de un producto, y lo agrega al array de productos.
    id: faker.string.uuid(),                                                 // Para agregar los datos de los productos, usamos la librería 'faker' para generar datos aleatorios de los productos para hacer pruebas.
    description: faker.commerce.productDescription(),                        // La librería 'faker' tiene contextos para generar datos aleatorios de los productos, como: nombre, descripción, precio, etc.
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),                 // Para agregar un Array de datos aleatorios dentro de unas opciones especificadas, usamos el método faker.helpers.arrayElement() de la librería 'faker'.
    price: parseInt(faker.commerce.price(), 10),                             // Podemos 'parsear' el precio a un número entero usando el método parseInt() de JavaScript, y especificando la base con el parámetro '10'.
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 10, max: 100 }),                          // Podemos generar rangos de números aleatorios con la librería 'faker' usando el método faker.number.int() y especificando el rango con los parámetros 'min' y 'max'.
    category: {                                                              // Agregamos un objeto con la estructura de una categoría siempre usando la librería 'faker' para generar datos aleatorios de las categorías para hacer pruebas.
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  })
}

console.log(products);