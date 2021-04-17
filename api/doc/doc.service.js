const docModel = require('../schemas/doc.schema');

exports.save= async (doc)=>{
    const saved= await docModel.create(doc);
    return saved;
}

exports.find=async ()=>{
    const data=await docModel.find();
    // console.log('req reached to database service')
    return data;
  
}