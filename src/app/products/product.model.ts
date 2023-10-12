// En este archivo se define la interfaz ProductInterface, que define la estructura de un producto, y un 'type' Sizes, que define los tamaños de los productos. Estos dos elementos se importan en otros archivos para definir la estructura de los productos y para definir el tipo de datos de los productos.

import { Category } from "../categories/category.model";            // Importamos la interfaz Category que esta definida en el archivo category.model.ts, esta Category tiene la estructura de un objeto.
import { BaseModel } from "../base.model";                          // Importamos el 'BaseModel' que esta definido en el archivo base.model.ts. y aplicamos Herencia para que esta interfaz ProductInterface herede las propiedades de la interfaz BaseModel.

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface ProductInterface extends BaseModel {               // Interfaz que define la estructura de un producto. Aplicamos Herencia para que esta interfaz ProductInterface herede las propiedades de la interfaz BaseModel. Las propiedades de la interfaz BaseModel son: id, createdAt, updatedAt.
  title: string,
  image: string,
  description: string,
  stock: number,
  color: string,
  price: number,
  isNew: boolean,
  tags: string[]
  category: Category,                                               // Acá usamos la interfaz Category que esta definida en el archivo category.model.ts, esta Category tiene la estructura de un objeto.
  size?: Sizes,
}