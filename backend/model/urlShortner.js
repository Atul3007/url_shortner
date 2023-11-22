const mongoose=require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, default: null },
  });
  
  const UrlModel = mongoose.model('Url', urlSchema);

  module.exports={
    UrlModel
  }