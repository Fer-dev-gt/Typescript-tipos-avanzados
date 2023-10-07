// En este archivo definimos la interfaz User, que define la estructura de un usuario, y la exportamos para usarla en otros archivos.

import { BaseModel } from "../base.model";

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export interface User extends BaseModel {   // Aplicamos Herencia para que esta interfaz User herede las propiedades de la interfaz BaseModel. Las propiedades de la interfaz BaseModel son: id, createdAt, updatedAt.
  username: string;
  role: ROLES;                              // Usamos el ENUM ROLES para definir el tipo de datos de este campo.
}

