/*
    CRUD: CREATE, READ, UPDATE, DELETE
    Crear, Leer, Actualizar y Eliminar
*/

import { crearProducto } from './mantenimientos/producto/mantenimiento_productos'

crearProducto({ nombre: 'Chocolate Hershey', precio: 10, stock: 1 })
