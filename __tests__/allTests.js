const request = require('supertest')

// const db = require('../database/dbConfig');

const server = require('../api/server');




describe(`***************************************************************       All MedCab9 Tests        **************************************************************************************`, () => {

    it(": should be running tests", function () {
        expect(true).toBeTruthy()
    })
    describe("=============== Set environment to production ===============", function () {
        it("should set environment to production", function () {
            expect(process.env.DB_ENV).toBe("production");
        });
    });
    describe("===============    GET /       ===============", function () {
        it("should return a 200 OK", function () {
            return request(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    })

    it.todo(": make more tests");

})