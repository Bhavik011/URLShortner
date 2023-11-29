const mongoose = require('mongoose');
const timestamps = require("mongoose-timestamp");

const UrlSchema = new mongoose.Schema({
  originalUrl:{type:String,required:true},
  shortUrl:{type:String,required:true},
  urlId:{type:String,required:true},
})

UrlSchema.plugin(timestamps);
module.exports = mongoose.model('Url',UrlSchema)