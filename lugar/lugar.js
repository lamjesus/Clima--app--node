// logicca para traer lugares de la api


const Axios = require('axios')

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion); // la direccion viene con espacios y al estar en una url da error, se convierte a url amigable 
    let resp = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la cuidad ${direccion}`);   
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    

    return {
        direccion:location.formatted_address ,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}

