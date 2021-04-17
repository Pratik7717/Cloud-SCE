const express = require('express');
const routes = require('./api/doc/doc.routes');
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

// console.log('user : ', process.env.DB_USER);
const user=process.env.DB_USER;
const passwd=process.env.DB_PASSWD;
const name=process.env.DB_NM;

mongoose.connect(`mongodb+srv://${user}:${passwd}@cluster0.y9okf.mongodb.net/${name}?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology:true }
);

mongoose.connection.on('connected',()=>{
  console.log('connected to database')
});

app.get('/',routes);
app.post('/',routes);

module.exports=app;