import React, { useState } from "react";
import axios from "axios"

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [expiry, setExpiry] = useState("");

const handleSubmit=async(e)=>{
e.preventDefault();
 try {
    const obj={
        url, customAlias:shortUrl, expiresAt:expiry
    }
    const {data}=await axios.post("https://sangria-rhinoceros-shoe.cyclic.app/api/shorten",obj);
    alert(data.message);
    setUrl("");
    setExpiry("");
    setShortUrl("");
 } catch (error) {
    console.log(error)
 }
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="url-form">
        <h1>URL Shortener</h1>

        <label htmlFor="url">URL</label>
        <input
          type="url"
          id="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <label htmlFor="shortUrl">Short URL (optional)</label>
        <input
          type="text"
          id="shortUrl"
          placeholder="Enter short URL"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
        />

        <label htmlFor="expiry">Expiration Date (optional)</label>
        <input
          type="date"
          id="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UrlForm;
