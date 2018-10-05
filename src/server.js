const express = require("express");
const morgan = require("morgan");
const httpStatus = require("http-status");
const nconf = require("nconf");
const pkg = require("../package.json");

nconf.argv().env("__");
nconf.defaults({"conf": `${__dirname}/../config.json`});
nconf.file(nconf.get("conf"));

const server = express();
server.use(morgan("dev"));

server.get("/ping", (req, res) => {
    res.status(httpStatus.OK).json({
        "status": "green",
        "version": pkg.version
    });
});

const port = nconf.get("port");

server.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`Server is listening on port ${port}`);
});

module.exports = server;