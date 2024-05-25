import { readFileSync, writeFileSync } from 'fs'
import { CrearProducto, Producto } from './producto.interface'

const lecturaProductos = (): Producto[] => {
    const archivo: string = readFileSync('./src/datos/productos.json', 'utf8')
    if (archivo.trim() === '') return []
    return JSON.parse(archivo) as Producto[]
}

const crearProducto = (crearProducto: CrearProducto) => {
    const productosActuales = lecturaProductos()
    crearProducto.id_producto = 4
    productosActuales.push(crearProducto as Producto)
    writeFileSync('./src/datos/productos.json', JSON.stringify(productosActuales))
}

export { lecturaProductos, crearProducto }
