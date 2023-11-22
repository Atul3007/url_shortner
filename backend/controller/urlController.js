const { UrlModel } = require("../model/urlShortner");
const shortid = require('shortid');

const updateURL=async(req,res)=>{
    try {
        const { url, customAlias, expiresAt } = req.body;
        // Validate URL
        if (!isValidUrl(url)) {
          return res.status(400).json({ error: 'Invalid URL' });
        }
      
        // Check if custom alias is provided and available
        let shortUrl;
        if (customAlias) {
          if (await isAliasTaken(customAlias)) {
            return res.status(400).json({ error: 'Custom alias is already taken' });
          }
          shortUrl = customAlias;
        } else {
          shortUrl = shortid.generate();
        }
      
        // Save URL mapping to MongoDB
        const urlDocument = new UrlModel({
          originalUrl: url,
          shortUrl,
          expiresAt: expiresAt ? new Date(expiresAt) : null,
        });
        await urlDocument.save();
      
      res.status(200).json({
        success:true,
        message:`Your Short URL is ${shortUrl}`
      })
    } catch (error) {
        console.log(error);
    }
}

const getURL=async(req,res)=>{
    try {
        const { shortUrl } = req.params;
      //  console.log(shortUrl)
        // Find the original URL from the database
        const urlDocument = await UrlModel.findOne({ shortUrl });
        res.status(200).json(urlDocument.originalUrl);
    } catch (error) {
        console.log(error);
    }
}

function isValidUrl(str) {
    const urlRegex = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return urlRegex.test(str);
  }
  
  async function isAliasTaken(alias) {
    const existingUrl = await UrlModel.findOne({ shortUrl: alias });
    return !!existingUrl;
  }
  

module.exports={
    updateURL,
    getURL
}