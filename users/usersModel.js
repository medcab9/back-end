const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

// =========== GET Users ===========
function find() {
    return db('users').select('id', 'username', 'email').orderBy('id', 'asc')
};

// =========== GET User by id ===========
function findById(id) {
    return db("users").where({ id }).select('id', 'username', 'email').first();
};

// =========== GET User by username ===========
function findBy(filter) {
    return db('users').where(filter)
};

// =========== POST User ===========
function add(user) {
    return db('users').insert(user, "id").then(([id]) => {
        return findById(id);
    });
}

// =========== PUT User =========== why not
function update(changes, id) {
    return db('users').where({ id }).update(changes).then(() => {
        return findById(id);
    });
}

// =========== DELETE User ===========
function remove(id) {
    return db('users')
            .where({ id })
            .del()
};