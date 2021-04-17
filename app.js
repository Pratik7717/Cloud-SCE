const express = require('express');
const routes = require('./api/doc/doc.routes');
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log('user : ', process.env.DB_USER);

app.get('/',routes);

module.exports=app;