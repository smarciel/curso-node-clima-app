const axios = require('axios').default;

const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'e6f2990d5emsh12b31cbf327d3e4p18c64bjsn54495f25b9a2' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return { dir, lat, lon };
}

module.exports = {
    getLugarLatLng
}