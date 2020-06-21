const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('users').select('id', 'username', 'email')
};

function findBy(filter) {
    return db('users').where(filter)
};

function add(user) {
    return db('users').insert(user, "id").then(([id]) => {
        return findById(id);
    });
}

function findById(id) {
    return db("users").where({ id }).select('id', 'username', 'email').first();
};

function update(changes, id) {
    return db('scheusersmes').where({ id }).update(changes).then(() => {
        return findById(id);
    });
}

function remove(id) {
    return db('users')
            .where({ id })
            .del()
};