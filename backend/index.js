const express=require("express");
const {connection}=require("./config/db");
const { urlrouter } = require("./routes/urlRoute");

const app=express();
app.use(express.json());

const cors = require("cors"); 

app.use(
  cors()
);


app.use("/api/",urlrouter);

app.get("/test",(req,res)=>{
    try {
        res.send("welcome")
    } catch (error) {
        console.log(error)
    }
})

app.listen(8000,async (req,res)=>{
    try {
        await connection;
        console.log("Connected to db")
    } catch (error) {
        console.log("error in connecting")
    }
    console.log("listening to port 80000");
})