"use strict";

const express = require("express");
const morgan = require("morgan");
const httpStatus = require("http-status");

const app = express();
app.use(morgan("dev"));

app.get("/hello/:name", (req, res) => {
    res.status(httpStatus.OK).json({"hello": req.params.name});
});

const port = process.env.PORT || 5678;

app.listen(port, (err) => {                                              
    if (err) {                                                           
        return console.log(err);                                         
    }                                                                    
                                                                         
    return console.log(`Server is listening on port ${port}`);
});                                                                      
                                                                         