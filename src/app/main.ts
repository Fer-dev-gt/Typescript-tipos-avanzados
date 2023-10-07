// En este archivo se ejecuta la función addProduct() que esta definida en el archivo product.service.ts, esta función recibe un objeto con la estructura de un producto, y lo agrega al array de productos.
import { addProduct } from "./products/product.service";

addProduct({
  id:  '1',
  title: 'Product 1',
  createdAt: new Date(),
  stock: 90,
  category: {
    id: '12',
    name: 'Category 1'
  }
})