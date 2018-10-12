const lugar = require('./lugar/lugar');
const weather = require('./clima-mundo/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: "direccion de la ciudad para optener el clima",
        demand: true
    }
}).argv;

 let getInfo = async (direccion)=>{
     try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await weather.getClima(coors.lat,coors.lng );
        
        return `el clima en ${coors.direccion} es ${ temp.temp }`;
     } catch (error) {
         return `no se pudo determinar el clima en ${direccion}`
     }
     
 }

// lugar.getLugarLatLng(argv.direccion)
//      .then(resp => console.log(resp))
//     .catch(e => console.log(e))

// weather.getClima(9.9280694,-84.0907246)
//     .then( temp => console.log(temp))
//     .catch(e => console.log(e))

getInfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch(e => console.log(e));