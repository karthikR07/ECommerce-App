const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer")();
const cors = require("cors");
const userController = require("./user/routes/user");
const orderController = require("./user/routes/orders");
const cartController = require("./user/routes/cart");
const itemcontroller = require("./user/routes/item");
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
app.use(multer.array());
app.use(cors());

//Database connect
mongoose.connect("mongodb://localhost/ecommerce",(data)=>{
    console.log("server connected at Database")
},(err)=>{
    console.log(err)
});

app.get("/", (req,res)=>{
    res.status(200).send("eCommerce Backend")
});

//middleware
app.use("/user", userController);
app.use("/order", orderController);
app.use("/cart", cartController);
app.use("/item", itemcontroller);