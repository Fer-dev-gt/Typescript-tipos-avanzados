import { User, ROLES } from './01-enum';                  // Importamos los tipos de datos que vamos a usar y el data type user del ejercicio de la primera clase

const currentUser: User = {                               // Creamos una variable de tipo User y le asignamos un objeto con las propiedades username y role, VSCode al ver que usamos ENUMs nos mostrará los valores disponibles para la propiedad 'role'
  username: 'Fernando',
  role: ROLES.CUSTOMER
}

// --------------- 1 role -------------
export const checkAdminRole = () => {                     // Función que valida si el usuario actual tiene el rol de ADMIN
  if(currentUser.role === ROLES.ADMIN) {                  // Usamos el ENUM para comparar el valor de la propiedad 'role' del usuario actual con el valor ADMIN
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole', rta);


// --------------- 2 roles -------------
export const checkRole = (role1: string, role2: string) => {      // Función que valida si el usuario actual tiene alguno de los 2 roles enviados como parámetros
  if(currentUser.role === role1) {
    return true;
  }
  if(currentUser.role === role2) {
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);                // Mandamos 2 roles como parámetros aunque ninguno de los 2 es el rol del usuario actual el cual es CUSTOMER
console.log('checkRole', rta2);



// --------------- N roles, usando un Array -------------
export const checkRoleV2 = (roles: string[]) => {                 // Podemos definir un array de roles y validar si el usuario actual tiene alguno de esos roles para poder enviar N cantidad de roles
  if(roles.includes(currentUser.role)) {                          // Usamo el Array method includes para validar si el rol del usuario actual está incluido en el array de roles
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);            // Ahora los parametros tienen que ser enviados como un array, sino mandamos un array nos dará un error
console.log('checkRoleV2', rta3);



// --------------- N roles, usando REST params -------------
export const checkRoleV3 = (...roles: string[]) => {              // Aplicamos los REST params para poder enviar N cantidad de roles como parámetros
  if(roles.includes(currentUser.role)) {                          // Usamo el Array method includes para validar si el rol del usuario actual está incluido en el array de roles
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);        // Como se usaron REST params podemos enviar N cantidad de roles como parámetros y no marcará error
console.log('checkRoleV3', rta4);