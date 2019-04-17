const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;


const getInfo = async( direccion ) => {

    try {
        const coord = await getLugarLatLng(direccion);
        const resp = await getClima(coord.lat, coord.lng);
        return `El clima de ${coord.dir} es de ${resp}`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);