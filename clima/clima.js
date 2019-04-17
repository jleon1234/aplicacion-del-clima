const axios = require('axios');

const getClima = async (lat, lng) =>{
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7406119d3ced6bd0c56dd332204b4ded&units=metric`);
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}