const express = require("express");
const morgan = require("morgan");
const httpStatus = require("http-status");
const nconf = require("nconf");
const pkg = require("../package.json");
const logger = require("winston");

nconf.argv().env("__");
nconf.defaults({"conf": `${__dirname}/../config.json`});
nconf.file(nconf.get("conf"));

const server = express();
server.use(morgan("dev"));

server.get("/ping", (_, res) => {
    res.status(httpStatus.OK).json({
        "status": "green",
        "version": pkg.version
    });
});

const port = nconf.get("server:port");
logger.level = nconf.get("logging:level");

if (!module.parent) {
    server.listen(port, (err) => {
        if (err) {
            return logger.log("error", err);
        }

        return logger.log("info", `Server is listening on port ${port}`);
    });
}

module.exports = server;