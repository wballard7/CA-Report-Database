/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.integer('manuever_unit_id').unsigned().notNullable();      
      table.string('position').notNullable();
      table.string('grade').notNullable();
      table.string('last_name').notNullable();
      table.string('first_name').notNullable();
      table.integer('adcon_id').unsigned().notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at

      table.foreign('manuever_unit_id').references('id').inTable('manuever_unit').onDelete('CASCADE');
      table.foreign('adcon_id').references('id').inTable('garrison_unit').onDelete('CASCADE');
    
    });
  };

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
return knex.schema.dropTable('users');
};
