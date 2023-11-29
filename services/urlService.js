const Url = require('../models/url')

exports.findOriginalUrl= async(url)=>{
  return await Url.findOne({originalUrl:url}).lean();
}

exports.createShortUrl = async(data)=>{
  return await Url.create(data);
}

exports.returnOriginalUrl = async(url)=>{
  return await Url.findOne({urlId:url}).lean();
}