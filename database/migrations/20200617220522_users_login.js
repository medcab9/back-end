
exports.up = function(knex) {
    return knex.schema
    .createTable('users', table => {
        table.increments();
        table.text('username', 30).unique().notNullable();
        table.string('password').notNullable();
    })
};

exports.down = function(knex) {
  
};
