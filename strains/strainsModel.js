const db = require('../database/dbConfig.js');

module.exports = {
    // add,
    find,
    // findBy,
    // findById,
    // update,
    // remove
};

// =========== GET Users ===========
function find() {
    return db('strains')
    // .select('id', 'username', 'email').orderBy('id', 'asc')
};