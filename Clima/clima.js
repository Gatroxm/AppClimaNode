const axios = require('axios');

const getClima = async (lat, lng) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e4ace82a38f1a8c522d23b7de7351ccb`);

    return resp.data.main.temp;
    
}

module.exports = {
    getClima
}