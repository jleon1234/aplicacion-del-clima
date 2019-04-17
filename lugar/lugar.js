const axios = require('axios');

const getLugarLatLng = async ( direccion ) => {

    const encodeUrl = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': 'ef6de69b1amsh3c2b0f7e70f3323p178588jsn69ae1a7767b1'}
    });

    const res = await instance.get();

    if(res.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = res.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng 
    }
}

module.exports = {
    getLugarLatLng
}