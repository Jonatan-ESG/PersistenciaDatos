import { readFileSync, writeFileSync } from 'fs'
import { CrearProducto, Producto } from './producto.interface'

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

export { lecturaProductos, crearProducto, eliminarProducto }
