import express from 'express'
import cors from 'cors'

const app= express()


app.get('/',(req,res)=>{
    res.json({status:true, msg:"initializing server"})
})



app.listen(3000,()=>{
    console.log("server is running");
    
})