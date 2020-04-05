const axios = require('axios').default;

const apiKey = '7b041516150877ff40072ee1e2b585a5';

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}