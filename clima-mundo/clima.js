const Axios = require('axios');

const getClima = async (lat,lng) =>{
    let resp = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=875b2b7f36d409c789e4a5e8029bfedd`)
    let clima = resp.data.main
    
    return {
        temp: clima.temp
    }
};
module.exports = {
    getClima
}
