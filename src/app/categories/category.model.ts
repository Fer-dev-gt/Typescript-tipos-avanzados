// En este archivo definimos la interfaz Category, que define la estructura de una categoría, y la exportamos para usarla en otros archivos.

import { BaseModel } from "../base.model";

export interface Category extends BaseModel {                   // Aplicamos Herencia para que esta interfaz Category herede las propiedades de la interfaz BaseModel. Las propiedades de la interfaz BaseModel son: id, createdAt, updatedAt.
  name: string;                                                 // Ahora en este campo solo agregamos los campos que queremos que tenga especificamente la interfaz Category.
}