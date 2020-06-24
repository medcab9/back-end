const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
};

// =========== GET User_ Response's ===========
function find() {
    return db('user_response')
};

// =========== GET User_Response by id ===========
function findById(id) {
    return db('user_response').where({ id }).first();
};

// =========== POST User_Response ===========
function add(user_response) {
    return db('user_response').insert(user_response, "id").then(([id]) => {
        return findById(id);
    });
}