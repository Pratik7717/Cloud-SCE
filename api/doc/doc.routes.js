const express = require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.end("Hello from express..");
    console.log(`req reached at ${__filename}`)
});

module.exports=router;