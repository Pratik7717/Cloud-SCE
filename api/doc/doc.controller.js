const docService = require('./doc.service');
exports.save= async (req,res,next)=>{
    try {
      const saved=await docService.save(req.body);
      res.status(201).json({
        success: true,
        data: saved
      });
    } catch (err) {
      console.log('err',err);
    }
  
}