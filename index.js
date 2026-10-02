import express from 'express'
import cors from 'cors'

const app= express()

const products=[
    {
        title:"T-Shirt",
        catagory:"cloths",
        price:'200',
        id:1
    },
    {
        title:"Oppo f19",
        catagory:"mobile phones",
        price:'14990',
        id:2
    },
    {
        title:"Oppo Charger",
        catagory:"charger",
        price:'1500',
        id:3
    },
    {
        title:"Realme Powerbank",
        catagory:"powerbank",
        price:'2000',
        id:4
    },
    {
        title:"lenovo laptop",
        catagory:"laptops",
        price:'60000',
        id:5
    },

]

app.use(cors());

app.get('/products',(req,res)=>{
    res.json({status:true, products})
})


app.get('/',(req,res)=>{
    res.json({status:true, msg:"initializing server"})
})



app.listen(3000,()=>{
    console.log("server is running");
    
})