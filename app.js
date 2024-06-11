const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {employeemodel}=require("./models/addemployee")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://bhagya:bhagya20@cluster0.gszky.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let employee=new employeemodel(input)
    employee.save()
    
    res.json({"status":"success"})
   
})

app.get("/view",(req,res)=>{
    
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
    


})

app.listen(8082,()=>{
    console.log("server started")
})