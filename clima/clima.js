const axios = require('axios')

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=890b868adc22ee2ff1755895c47caec1`)
    let temp = resp.data.main

    return {
        temperatura: temp.temp,
        tempmin: temp.temp_min,
        tempmax: temp.temp_max
    }

}

module.exports = {
    getClima
}