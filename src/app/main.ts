// En este archivo se ejecuta la función addProduct() que esta definida en el archivo product.service.ts, esta función recibe un objeto con la estructura de un producto, y lo agrega al array de productos.

import { addProduct, products, updateProduct, findProducts } from "./products/product.service";           // Importamos la función addProduct() y el array de productos desde el archivo product.service.ts.
import { faker} from '@faker-js/faker';                                      // Importamos la librería 'faker' para generar datos aleatorios de los productos para hacer pruebas.

for (let index = 0; index < 50; index++) {                                   // Definimos un ciclo 'for' para ejecutar la función addProduct() 50 veces.
  addProduct({                                                               // Ejecuto la función addProduct() que esta definida en el archivo product.service.ts, esta función recibe un objeto con la estructura de un producto, y lo agrega al array de productos.
    description: faker.commerce.productDescription(),                        // La librería 'faker' tiene contextos para generar datos aleatorios de los productos, como: nombre, descripción, precio, etc.
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),                 // Para agregar un Array de datos aleatorios dentro de unas opciones especificadas, usamos el método faker.helpers.arrayElement() de la librería 'faker'.
    price: parseInt(faker.commerce.price(), 10),                             // Podemos 'parsear' el precio a un número entero usando el método parseInt() de JavaScript, y especificando la base con el parámetro '10'.
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),                          // Podemos generar rangos de números aleatorios con la librería 'faker' usando el método faker.number.int() y especificando el rango con los parámetros 'min' y 'max'.
    categoryId: faker.string.uuid()                                          // Podemos generar un 'uuid' aleatorio con la librería 'faker' usando el método faker.datatype.uuid().
  })
}

console.log(products);


const product = products[0];                                                 // Escogemos el primer producto del array de productos y lo guardamos en la variable 'product'.
updateProduct(product.id, {                                                  // Ejecutamos la función 'updateProduct()' que esta definida en el archivo product.service.ts, esta función recibe el id del producto que queremos actualizar, y un objeto con las propiedades que queremos actualizar.
  title: 'Nuevo titulo',                                                     // Como updateProduct() recibe un objeto con las propiedades que queremos actualizar, podemos actualizar solo las propiedades que queremos actualizar, y las demás propiedades no se actualizarán ya que esta usaron 'Omit' en la interfaz UpdateProductDTO.
  stock: 1000,
})


findProducts({                                                               // Ejecutamos la función 'findProducts()' que esta definida en el archivo product.service.ts, esta función recibe un objeto con las propiedades del "FindProductDTO" que queremos buscar, y retorna un array de objetos con la estructura de un 'ProductInterface'.
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['tag1', 'tag2'],
})