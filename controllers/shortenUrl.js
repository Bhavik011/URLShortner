const urlService = require('../services/urlService');
const {ErrorHandler} = require('../utils/errorHandler')
const Uuid = require('uuid');

exports.shortenUrl = async(req,res,next)=>{
  try{
    let inputData = req.body;
    let originalUrl = inputData.originalUrl;
    let customUrl = inputData.customUrl;
    let shortUrl = await urlService.findOriginalUrl(originalUrl);
    let urlId;
    if(!shortUrl){
      if(customUrl){
        const customUrlExists = await urlService.returnOriginalUrl(customUrl);
        if(customUrlExists){
         return next(new ErrorHandler("custom Url is already taken! Please choose another name",400));
        }
        urlId = customUrl;
      }else{
        urlId = Uuid.v4();
      }
      let data = {
        originalUrl,
        shortUrl:`http://localhost:3000/app/v1/${urlId}`,
        urlId
      }
       shortUrl = await urlService.createShortUrl(data);
    }
    return res.status(200).json({status:"success",shortUrl,originalUrl})
  }catch(err){
    return next(err.stack);
  }
}

exports.originalUrl = async(req,res,next)=>{
  try{
  let urlId = req.params.urlId;
  const originalUrl = await urlService.returnOriginalUrl(urlId);
  if(originalUrl){
    let urlExpiry = process.env.URL_EXPIRY * 60000;
    let currentDate = new Date();
    let createdDate = new Date(originalUrl.createdAt);
    let expiryDate =  new Date(createdDate.getTime() + urlExpiry);
    if(currentDate<expiryDate){
    return res.redirect(originalUrl.originalUrl);
    }else{
      return next(new ErrorHandler("Url Expired!",400))
    }
  }else{
    return next( new ErrorHandler("Enter correct url",400))
  }

}catch(err){
  return next(err.stack);
}
}