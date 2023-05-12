const request = require ("request")
const forcast = (latitude , longtitude , callback) => {
    const forcastUrl = "  http://api.weatherapi.com/v1/current.json?key=bb2500011e564b0dbe7100120231205&q= " + latitude + "," + longtitude
    request ({url : forcastUrl , json : true} , (error , response ) => {
        if (error){
            callback("not connect geocode service" , undefined)
        }else if (response.body.error){
            callback(response.body.error.massage ,undefined)
        }else {
            callback(undefined , "Country: " + response.body.location.name + '   ,  Weather: ' +  response.body.current.condition.text)
        }

    })
}

module.exports = forcast ;