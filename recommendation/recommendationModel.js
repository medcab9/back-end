const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
};

// =========== GET Strains ===========
function find() {
    return db('recommendation')
};

// =========== GET Strain by id ===========
function findById(id) {
    return db('recommendation').where({ id }).first();
};