import { readFileSync } from 'fs'

const lecturaArchivo = () => {
    const archivo: string = readFileSync('./src/datos/productos.json', 'utf8')
    console.log(archivo)
}

export { lecturaArchivo }
