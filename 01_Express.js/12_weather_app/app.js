const express = require("express");
const { chownSync } = require("fs");
const { Agent } = require("http");
const https = require('https') //its build in install in nodemodule
const app = express();
const port = 3000;

const body_parser = require("body-parser")
app.use(body_parser.urlencoded({extended: true}))



 app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/", (req, res)=>{
//    console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "34baeec1409dc49118f8e7db762a5eea"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+
    "&appid="+ apiKey +"&units="+ unit
    https.get(url, (response)=>{
       console.log(response.statusCode)
       response.on("data", (data)=>{
           // console.log(data)
           const weatherData = JSON.parse(data)
           const temp = weatherData.main.temp;
           const descrp = weatherData.weather[0].description
           const icon = weatherData.weather[0].icon
           const imgURl = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
           res.send(`
            <p>The weather is currently ${descrp}</p>
            <h1>The Temperature in ${query} is ${temp} degrees Celsius</h1>
            <img src="${imgURl}" alt="Weather Icon">
        `);
    })
 })
})

   
app.listen(port, ()=>{
    console.log("Server is running on", port)
})