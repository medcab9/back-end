
exports.up = function(knex) {
    return knex.schema
   .createTable('strains', table => {
       table.increments('id');
       table.text('name', 255).notNullable();
       table.text('breed').notNullable();
       table.text('rating', 255).notNullable();
       table.text('effects').notNullable();
       table.text('flavor');
       table.text('description');
   })
   .createTable('user_response', table => {
       table.increments('id');
       table.integer('user_id', 255).notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
       table.text('desired_effects', 255).notNullable();
   })
   .createTable('recommendation', table => {
       table.increments('id');
       table.integer('user_id', 255).notNullable().unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
       table.specificType('Predictions', 'text ARRAY')
   })
   
 
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('strains')
    .dropTableIfExists('user_response')
    .dropTableIfExists('recommendation')
};
