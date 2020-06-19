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
    return db('users').select('id', 'username', 'email', 'password')
};

function findBy(filter) {
    return db('users').where(filter)
};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return findById(id)
};

function findById(id) {
    return db("users").where({ id }).first();
};

function update(id, user) {
    return db('users')
            .where('id', Number(id))
            .update(user)
};

function remove(id) {
    return db('users')
            .where('id', Number(id))
            .del()
};