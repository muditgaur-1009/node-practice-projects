const express=require("express")
const bodyparser=require("body-parser")
const app=express();

app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.sendfile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result =num1/(num2*num2);

    res.send("the result of the calculation is"+result);
});



app.listen(3000,function(){
    console.log("port is working at channel 3000")
});
