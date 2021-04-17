const express = require('express');
const routes = require('./api/doc/doc.routes');
const app=express();
const mongoose = require('mongoose');

app.get('/',routes);

module.exports=app;