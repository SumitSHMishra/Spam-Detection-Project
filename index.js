require('dotenv').config()
console.log(process.env.PORT)
const express=require('express')
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("sumit mishra ji")
})

app.get("/youtube",(req,res)=>{
    res.send("yuthub page hai ji")
})

app.listen(port,()=>{
    console.log("we are listening on port 3000")
})