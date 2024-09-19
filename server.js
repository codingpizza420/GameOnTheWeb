const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req,res) => 
{
    fs.readFile("./dumby.html" , (err,data) => 
    {       
        if(err)
        {
            console.log(err)
            return
        }
        
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })
})

app.listen("2000",() => 
{
    console.log("server is on");
})