require("dotenv").config();
const express = require('express');
const app = express();
const connectdb = require('./db/connect')
const PORT = process.env.PORT || 3000; // Change the port to 3000 or any other available port

const products_routes = require('./routes/products')
app.get("/",(req,res)=>{
    res.send("hi i am live")
});
app.use("/api/products",products_routes);
const start = async ()=>{
    try{
        await connectdb(process.env.MONGODB_URL);
       app.listen(PORT,"0.0.0.0",()=>{
          console.log("Server is running on port " + PORT);
        });
    }
    catch(error) {
        console.log(error);
    }
};

start(); // Call the start function to start the server
