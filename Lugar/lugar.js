const axios = require('axios');

const getLugarLatLog = async( direccion ) => {

    const encodeUrl = encodeURI( direccion );
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '35b447ea06mshc2357b292c3daf9p10667ejsn3444ed35e85b'
        }
      });
    
    const respuesta = await instance.get();
    
    if (respuesta.data.Results.length === 0 ){
        throw new Error(`No se encontraron datos para la ciudad ${ direccion }`)
    }

    const data = respuesta.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return{
        location,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLog
}