const chai = require("chai");
const expect = chai.expect;
const server = require("../src/server");
const httpStatus = require("http-status");
const chaiHttp = require("chai-http");
const pkg = require("../package.json");

chai.use(chaiHttp);

describe("Server - ping", () => {
    it("should return expected response", () => {
        const request = chai.request(server)
            .get("/ping")
            .then((res) => {
                expect(res.status).to.equal(httpStatus.OK);
                expect(res.body.status).to.equal("green");
                expect(res.body.version).to.equal(pkg.version);
            });

        return request;
    });
});


