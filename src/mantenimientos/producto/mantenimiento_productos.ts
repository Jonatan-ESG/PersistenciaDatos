import { readFileSync, writeFileSync } from 'fs'
import { ActualizarProducto, CrearProducto, Producto } from './producto.interface'

const direccionArchivo = './src/datos/productos.json'

const lecturaProductos = (): Producto[] => {
    const archivo: string = readFileSync(direccionArchivo, 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Producto[]
}

const crearProducto = (crearProducto: CrearProducto) => {
    const productosActuales = lecturaProductos()
    crearProducto.id_producto = 4 // Agregar lógica para deteminar el siguiente ID
    productosActuales.push(crearProducto as Producto)
    writeFileSync(direccionArchivo, JSON.stringify(productosActuales))
}

const eliminarProducto = (id_producto: number) => {
    const productosActuales = lecturaProductos()
    const productosFinales = productosActuales.filter((producto) => producto.id_producto !== id_producto)
    writeFileSync(direccionArchivo, JSON.stringify(productosFinales))
}

const actualizarProducto = (id_producto: number, actualizarProducto: ActualizarProducto) => {
    const productosActuales = lecturaProductos()
    const productoAActualizar = productosActuales.filter((producto) => producto.id_producto === id_producto)[0]
    if (actualizarProducto.nombre) productoAActualizar.nombre = actualizarProducto.nombre
    if (actualizarProducto.precio) productoAActualizar.precio = actualizarProducto.precio
    if (actualizarProducto.stock) productoAActualizar.stock = actualizarProducto.stock
    eliminarProducto(id_producto)
    const productosFinales = lecturaProductos()
    productosFinales.push(productoAActualizar)
    writeFileSync(direccionArchivo, JSON.stringify(productosFinales))
}

export { lecturaProductos, crearProducto, eliminarProducto, actualizarProducto }
