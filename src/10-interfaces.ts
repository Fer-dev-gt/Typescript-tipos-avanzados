// Los 'type' y 'interface' son muy parecidos pero las interfaces son mas usadas en el mundo de TypeScript porque nos permiten definir una estructura de datos que debe tener un objeto y extenderlas

type Sizes = 'S' | 'M' | 'L' | 'XL';            // Cuando usamos 'type' podemos almacenar tipos primitivos y valores puntuales
type userId = string | number;                  // Cuando usamos 'type' podemos almacenar tipos primitivos y valores puntuales

// Forma antigua de trabajar con objetos
type Product = {                                // Podemos definir la estructura de un Objeto usando un 'type' pero esto no nos permite extenderlo
  id: string | number;
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes;
}

// La direfecia entre type y interface es que 'interface' la puede extender

interface ProductInterface {                      // Cuando usamos una 'interface' solo podemos almacenar objetos pero nos ayuda definir una estructura llave-valor de propiedades que describen lo que debe tener un objeto, es necesario escribir al principio la palabra 'interface' y el nombre de la 'interface' en mayuscula
  id: string | number;
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes;
}

const products: ProductInterface[] = [];            // Definimos que nuestro arreglo sera de tipo 'ProductInterface' el cual define la estructura que tiene que tener usando una 'Interface' y lo inicializamos como un arreglo vacio

products.push({                                     // Para agregar un nuevo producto al arreglo debemos pasarle un objeto con la estructura definida en la 'Interface' de 'ProductInterface'
  id: '1',
  title: 'Camiseta',
  createdAt: new Date(),
  stock: 90
})

const addProduct = (data: ProductInterface) => {    // Definimos una funcion que recibe un parametro de tipo 'ProductInterface' y lo agregamos al arreglo de productos
  products.push(data);
}