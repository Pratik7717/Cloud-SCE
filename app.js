const express = require('express');
const routes = require('./api/doc/doc.routes');
const app=express();

app.get('/',routes);

module.exports=app;