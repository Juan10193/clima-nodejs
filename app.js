const lugar = require('./lugar/lugar')

const argv = require('./config/yargs').argv

const clima = require('./clima/clima')


let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion)
        let temp = await clima.getClima(coors.lat, coors.lng)

        return `El clima en ${coors.direccion} es de ${temp.temperatura}°C \n la temperatura minima es de ${temp.tempmin} \n la temperatura maxima es ${temp.tempmax}`
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))