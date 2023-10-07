// En este archivo definimos la interfaz User, que define la estructura de un usuario, y la exportamos para usarla en otros archivos.

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export interface User {
  id: string | number;
  username: string;
  role: ROLES;                          // Usamos el ENUM ROLES para definir el tipo de datos de este campo.
}

