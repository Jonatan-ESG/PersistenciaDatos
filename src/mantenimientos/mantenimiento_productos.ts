import { readFileSync } from 'fs'

const lecturaArchivo = () => {
    const archivo: string = readFileSync('./../datos/productos.json', 'utf8')
    console.log(archivo)
}

export { lecturaArchivo }
