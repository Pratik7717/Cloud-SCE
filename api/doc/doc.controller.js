const docService = require('./doc.service');
exports.save= (req,res,next)=>{
    try {
      docService.save(req.headers);
      res.end("hello from express..")
    } catch (err) {
      console.log('err',err);
    }
  
}