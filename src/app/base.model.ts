// En este archivo definimos la interfaz BaseModel, que define la estructura de un modelo, y la exportamos para usarla en otros archivos.

// Una ventaja de usar un BaseModel es que si queremos hacer un cambio en la estructura de los modelos, solo tenemos que hacerlo en un lugar, en el BaseModel, y no en todos los modelos. Como cuando queremos agregar los campos createdAt y updatedAt a todos los modelos, solo tenemos que agregarlos en el BaseModel, y no en todos los modelos.
export interface BaseModel {                  // En esta Interfaz definimos atributos que van a tener todos los modelos y quiero que tengan, y la exportamos para usarla en otros archivos.
  readonly id: string,                        // Aplicamos el 'readonly' para que el id no se pueda modificar en algun momento u otra parte del codigo.
  readonly createdAt: Date,                   // El valor solo se puede asignar una vez y a partir de ese momento no se puede cambiar.
  updatedAt: Date,
}