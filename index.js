"use strict"
var express = require('express')
var app = express()
app.listen(3000) //setting up port
console.log('Node.js Express server is running on port 3000...')
app.get('/data/2.5/weather', get_weather) //
function get_weather(request, response){
    response.json({"temperature_in_farhenheit":55})
}