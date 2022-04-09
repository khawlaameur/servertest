const express = require ("express")
var app = express()
app.get("/",function(req,res){
   res.send("le server est en marche :) ")
})
app.listen(3000,()=>{
console.log("server started")
})