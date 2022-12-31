const express = require("express");

const app = express();
//API
app.get('/',(req,res)=>{
    res.send("API is running");
});
// API end

app.listen(5000,console.log("Server started on port 5000"));
