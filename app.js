const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `La temperatura de ${direccion} es de ${temp} grados.`
    } catch (e) {
        return `No se pudo determinar la temperatura de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)