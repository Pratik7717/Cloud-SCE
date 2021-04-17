const docModel = require('../schemas/doc.schema');

exports.save= async (doc)=>{
    const saved= await docModel.create(doc);
    return saved;
}