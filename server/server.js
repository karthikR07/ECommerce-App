const express = require("express");
const mongoose = require("mongoose");
const userController = require("./user/routes/user")

const app = express();

//server
app.listen(3001, (err)=>{
    if(!err){
        console.log("server started")
    }else{
        console.log(err);
    }
});

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Database connect
mongoose.connect("mongodb://localhost/ecommerce",(data)=>{
    console.log("server connected at Database")
},(err)=>{
    console.log(err)
});

app.get("/", (req,res)=>{
    res.send("eCommerce Backend")
});

//middleware
app.use("/user", userController);