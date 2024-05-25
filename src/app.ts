/*
    CRUD: CREATE, READ, UPDATE, DELETE
    Crear, Leer, Actualizar y Eliminar
*/

import { actualizarProducto, crearProducto, eliminarProducto } from './mantenimientos/producto/mantenimiento_productos'

// crearProducto({ nombre: 'Chocolate Hershey', precio: 10, stock: 1 })
// eliminarProducto(2)
actualizarProducto(3, { precio: 200 })
