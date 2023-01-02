const express=require("express")
const  bodyparser=require("body-parser")
const ejs =require("ejs")
const mongoose=require('mongoose');



const app=express();

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static("public"));


mongoose.connect("mongodb://127.0.0.1:27017/wikiDB",{useNewUrlParser:true})


const articleSchema={
   title:String,
   content:String

};


const Article=mongoose.model("Article",articleSchema);

app.get("/articles",function(erq,res){
    Article.find(function(err,foundAricles){
    res.send(foundAricles)    
    })
})


app.listen(1000,function(){
    console.log("server has been started at port 3000")
})