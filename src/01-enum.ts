// Una de las ventajas de usar ENUMs es que podemos definir un conjunto de valores que son válidos para una variable o propiedad y nos obliga a usar solo esos valores de lo contrario nos dará un error.

export enum ROLES {                                         // Definimos un ENUM con los 3 roles disponibles, solo esos 3 valores serán válidos para la propiedad 'role'
  ADMIN = 'admin',                                   // Por convención es mejor usar mayúsculas para los valores/keys de los ENUMs y el nombre del ENUM en singular y mayúscula
  SELLER = 'seller',
  CUSTOMER = 'customer'
}


export type User = {                                         // Definimos un tipo User con 2 propiedades, la propiedad 'role' solo puede tener los valores definidos en el ENUM ROLES
  username: string;
  role: ROLES;
}


const fernandoUser: User = {                          // Creamos una variable de tipo User y le asignamos un objeto con las propiedades username y role, VSCode al ver que usamos ENUMs nos mostrará los valores disponibles para la propiedad 'role'
  username: 'Fernando',
  role: ROLES.SELLER                                  // Le asignamos el rol SELLER que es uno de los 3 roles disponibles, si agregamos un rol que no está definido en el ENUM nos dará un error
}