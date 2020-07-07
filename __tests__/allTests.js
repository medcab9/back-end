const request = require('supertest')

const db = require('../database/dbConfig');

const server = require('../api/server');




describe(`***************************************************************       All MedCab9 Tests        **************************************************************************************`, () => {
    it(": should be running tests", function () {
        expect(true).toBeTruthy()
    })

    it.todo(": make more tests");
})