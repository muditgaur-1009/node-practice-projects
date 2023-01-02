const express =require("express")
const app=express();


app.get("/",function(request,response){
    response.send("<h1>hello mudit here</h1>");
})

app.get("/contact",function(request,response){
    response.send("<h1>contact me at :muditgaur1009@gmail.com</h1>");
})

app.get("/about",function(request,response){
    response.send("<h1>i liove in jaipur and i am a gym enthusiast</h1>");
})

app.get("/hobbies",function(request,response){
    response.send("<h1> i go JiMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!!!!!!!!!!!!!!!!!</h1>");
})





app.listen(3000,function(){
    console.log("server has been started at port 3000");
});
