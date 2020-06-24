const db = require('../database/dbConfig.js');

module.exports = {
    find,
    // findBy,
    findById,
};

// =========== GET Strains ===========
function find() {
    return db('strains')
};

// =========== GET Strain by id ===========
function findById(id) {
    return db('strains').where({ id }).first();
};