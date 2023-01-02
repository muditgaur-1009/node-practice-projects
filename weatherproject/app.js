const express = require("express");
const https=require("https")

const app=express();


app.get("/", function(req,res) {
    const url="https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid={3ab5fa656c1e4c582aa902ea13d7a056}"
    const url2="https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={3ab5fa656c1e4c582aa902ea13d7a056}"

    https.get(url,function(response){
        console.log(response);
    })
    res.write("server is up and running")

    https.get(url2,function(response2){
        console.log(response2);
    })
    res.write(response2);
    res.send()





})


app.listen(3000, function() {
    console.log("server has been started at port 3000.")
})