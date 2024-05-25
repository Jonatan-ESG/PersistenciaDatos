export interface Producto {
    id_producto: number
    nombre: string
    precio: number
    stock: number
}

export interface CrearProducto {
    id_producto?: number
    nombre: string
    precio: number
    stock?: number
}
