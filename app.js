
const request = require ("request")
const geocode = require("./data1.js/geocode")
const forcast = require("./data1.js/forecast")
const country1 = process.argv[2]
geocode ( country1 , (error , data) => {
    console.log("ERROR :" , error )
    console.log("DATA :" , data)
if (data){
forcast(data.latitude , data.longtitude , (error , data) => {
    console.log("ERROR :" , error )
    console.log("DATA :" , data)
})
}else {
console.log("Data Entered have an Error")
}

})