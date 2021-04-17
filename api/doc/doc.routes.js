const express = require('express');
const controller = require('./doc.controller');

const router=express.Router();

router.get('/',controller.find)
router.post('/',controller.save);

module.exports=router;