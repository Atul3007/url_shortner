import axios from "axios";
import React, { useState } from "react";

const CheckUrl = () => {
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
       const {data}=await axios.get(`https://sangria-rhinoceros-shoe.cyclic.app/api/${shortUrl}`);
      // alert(data)
       window.location.href=data;
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div style={{margin:"10px",marginTop:"130px",textAlign:"center"}}>
      <h1>Check Your Shorten URL</h1>
      <label htmlFor="text"> URL</label>
      <input
        type="url"
        placeholder="Enter Your Shorten URL"
        value={shortUrl}
        onChange={(e) => setShortUrl(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CheckUrl;
