// getting-started.js
const express=require("express")
const mongoose = require('mongoose');

const app=express()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mudit:HZ9axUK7YYghjhGK@cluster0.eldfwu1.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


app.listen(3000,function(){
  console.log("server has been started at port 3000");
});
