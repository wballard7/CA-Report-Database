/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('garrison_unit', function (table) {
      table.increments('id').primary();
      table.string('company').notNullable();
      table.string('battalion').notNullable();
      table.string('command').notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at
    });
  };

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
return knex.schema.dropTable('garrison_unit');
};
