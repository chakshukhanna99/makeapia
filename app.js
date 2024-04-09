require("dotenv").config();
const express = require('express');
const app = express();
const connectdb = require('./db/connect')
const PORT = process.env.PORT || 1000;
const products_routes = require('./routes/products')
app.get("/",(req,res)=>{
    res.send("hi i am live")
});
app.use("/api/products",products_routes);
const start = async ()=>{
    try{
        await connectdb(process.env.MONGODB_URL);
       app.listen(PORT,()=>{
          console.log("Server is running on port " + PORT);
        });
    }
    catch(error) {
        console.log(error);
    }
};

start(); // Call the start function to start the server
