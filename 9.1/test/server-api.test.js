var supertest = require("supertest");
var assert = require("chai").assert;
var server = supertest.agent("http://localhost:1337");

describe("When open home page", function() {
    it("should return code 200 and hello message", function(done) {
        server
            .get("/")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(error, response) {
                assert.equal(response.status, 200);
                assert.equal(response.body.message, "Hello Express.js");
                done();
            });
    });

    it('should return code 404 if accessing random url', function(done) {
        server
            .get("/random")
            .expect(404)
            .end(function(error, response) {
                assert.equal(response.status, 404);
                done();
            });
    });

    it('should return message if accessing /hello', function(done) {
        server
            .get("/hello")
            .expect("Content-type", /json/)
            .expect(202)
            .end(function(error, response) {
                assert.equal(response.status, 200);
                assert.equal(response.body.message, "Hello stranger !");
                done();
            });
    });

    it('should return custom message if accessing /hello/:name', function(done) {
        server
            .get("/hello/username")
            .expect("Content-type", /json/)
            .expect(202)
            .end(function(error, response) {
                assert.equal(response.status, 200);
                assert.equal(response.body.message, "Hello, username !");
                done();
            });
    });

    it('should return requested URI if accessing /sub/**', function(done) {
        server
            .get("/sub/testurl")
            .expect("Content-type", /json/)
            .expect(202)
            .end(function(error, response) {
                assert.equal(response.status, 200);
                assert.equal(response.body.message, "You requested URI: /sub/testurl");
                done();
            });
    });
});