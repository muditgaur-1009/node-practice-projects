const express= require("express")
const bodyparser= require("body-parser");
const {render} = require("ejs");

const app=express();
var items=["go GYM","eat PROTIEN","take REST"];

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:"true"}));

app.get("/",function(req,res){

    var today= new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day=today.toLocaleDateString("en-US",options)
    res.render("lists",{kindaday:day, newListItems:items});

    
})

app.post("/",function(req,res){
    var item=req.body.newItem;

    items.push(item);
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("server started at 3000");
})