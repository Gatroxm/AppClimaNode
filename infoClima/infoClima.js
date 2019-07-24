
const lugar = require('../Lugar/lugar');
const clima = require('../Clima/clima');

const infoClima = async ( location ) =>{

    try{
        const cords = await lugar.getLugarLatLog( location );
        const temp = await clima.getClima( cords.lat, cords.lng);
        return `El clima en ${location} es de ${temp}.`;
    } catch ( e ){
        return `No se pudo determinar el clima de ${location}.`;
    }
}

module.exports = {
    infoClima
}