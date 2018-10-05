"use strict";

const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/hello/:name", (req, res) => {
    res.status(200).json({"hello": req.param.name});
});

const port = process.env.PORT || 5678;

app.listen(port, (err) => {                                              
    if (err) {                                                           
        return console.log(err);                                         
    }                                                                    
                                                                         
    return console.log(`Server is listening on port ${port}`);
});                                                                      
                                                                         