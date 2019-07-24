const infoClima = require('./infoClima/infoClima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


infoClima.infoClima( argv.direccion ).then( console.log ).catch( console.log );

