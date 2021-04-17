const mongoose = require('mongoose');

const docSchema=new mongoose.Schema({
  type:{type:String,require:[true,'type is required']},
  description:{type:String,require:[true,'text is required']}
});

module.exports=mongoose.model('docModel',docSchema);