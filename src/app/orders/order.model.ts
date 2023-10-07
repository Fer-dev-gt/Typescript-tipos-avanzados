// En este archivo definimos la interfaz Order, que define la estructura de un pedido, y la exportamos para usarla en otros archivos.

import { ProductInterface } from "../products/product.model";
import { User } from "../users/user.model";

export interface Order {                            // Interfaz que define la estructura de un pedido.
  id: string | number;
  createdAt: Date;
  products: ProductInterface[];                     // Cada orden tiene un array de 'ProductInterface[]', cada producto tiene la estructura definida en el archivo product.model.ts.
  user: User;                                       // Cada orden tiene un usuario, este usuario tiene la estructura definida en el archivo user.model.ts. la cual importamos en este archivo.
}