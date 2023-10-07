// En este archivo definimos la interfaz Order, que define la estructura de un pedido, y la exportamos para usarla en otros archivos.

import { BaseModel } from "../base.model";
import { ProductInterface } from "../products/product.model";
import { User } from "../users/user.model";

export interface Order extends BaseModel {          // Interfaz que define la estructura de un pedido. Aplicamos Herencia para que esta interfaz Order herede las propiedades de la interfaz BaseModel. Las propiedades de la interfaz BaseModel son: id, createdAt, updatedAt.
  products: ProductInterface[];                     // Cada orden tiene un array de 'ProductInterface[]', cada producto tiene la estructura definida en el archivo product.model.ts.
  user: User;                                       // Cada orden tiene un usuario, este usuario tiene la estructura definida en el archivo user.model.ts. la cual importamos en este archivo.
}