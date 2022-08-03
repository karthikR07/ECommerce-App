const express = require("express");

const router = express.Router();

router.post("/login",(req,res)=>{
    res.status(200).send("login Works")
});

router.post("/signup",(req,res)=>{
    res.status(200).send("signup Works")
});

router.post("/logout",(req,res)=>{
    res.status(200).send("logout Works")
});

module.exports = router;