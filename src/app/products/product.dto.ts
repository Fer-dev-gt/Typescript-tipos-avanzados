// En este archivo se define la interfaz CreateProductDTO la cual extiende de un 'Omit' de la interfaz ProductInterface, esto significa que la interfaz CreateProductDTO tendrá todas las propiedades de la interfaz ProductInterface, excepto las propiedades que se especifiquen en el 'Omit', en este caso, las propiedades que se omiten son: id, createdAt, updatedAt, category.
// Esto se hace para que la interfaz CreateProductDTO solo tenga las propiedades que se necesitan para crear un producto, y no tenga las propiedades que no se necesitan para crear un producto.

import { ProductInterface } from './product.model';                         // Importamos la interfaz ProductInterface que esta definida en el archivo product.model.ts, esta ProductInterface tiene la estructura de un objeto y esta la usaremos con el 'Omit' para crear la interfaz CreateProductDTO.

export interface CreateProductDTO extends Omit<ProductInterface, 'id' | 'createdAt' | 'updatedAt' | 'category'> {     // Interfaz que define la estructura de un producto. Aplicamos Herencia para que esta interfaz CreateProductDTO herede las propiedades de la interfaz ProductInterface. Las propiedades de la interfaz ProductInterface que NO usaremos son: id, createdAt, updatedAt, category.
  categoryId: string;                                                                                                 // Defino la propiedad categoryId que es un string la cual se creara al crear un producto.
};


// Lo contrario de un 'Omit' es un 'Pick', que permite seleccionar las propiedades que queremos usar de una interfaz y solo esas propiedades.
type example = Pick<ProductInterface, 'color' | 'description' >;            // Aqui se define un 'type' llamado example que es un 'Pick' de la interfaz ProductInterface, esto significa que el 'type' example tendrá las propiedades que se especifiquen en el 'Pick', en este caso, las propiedades que se especifican son: color, description.


// Forma con type de definir un 'Partial' de una interfaz, esto significa que el 'type' UpdateProductoDTO tendrá las propiedades que se especifiquen en el 'Partial', en este caso, las propiedades que se especifican son: title, description, price, stock, isNew, image, color, size, tags, category. Hace que todas las propiedades de la interfaz Product sean opcionales.
//type UpdateProductoDTO = Partial<ProductInterface>;


// Utilizamos 'Partial' para definir la interfaz UpdateProductDTO, esto significa que la interfaz UpdateProductDTO tendrá las propiedades que se especifiquen en el 'Partial' estas quedaran como opcionales, en este caso, las propiedades que se especifican son: title, description, price, stock, isNew, image, color, size, tags, category. Hace que todas las propiedades de la interfaz Product sean opcionales.
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}      // Hacemos que para cuando queremos actualizar un producto, solo se puedan actualizar las propiedades que se especifican en el 'Partial' ya que estas serán opcionales, y las demás propiedades no se podrán actualizar.


// Cuando usamos 'Required' en una interfaz, esto significa que todas las propiedades de la interfaz serán requeridas/obligatorias. Es lo contrario de 'Partial'.
type example2 = Required<Product>;                                          // Aqui se define un 'type' llamado example2 que es un 'Required' de la interfaz Product, esto significa que el 'type' example2 tendrá las propiedades que se especifiquen en el 'Required', en este caso, las propiedades que se especifican son: title, description, price, stock, isNew, image, color, size, tags, category. Hace que todas las propiedades de la interfaz Product sean requeridas/obligatorias.