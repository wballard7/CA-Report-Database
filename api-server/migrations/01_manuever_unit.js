/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable('manuever_unit', function (table) {
          table.increments('id').primary();
          table.string('unit_name').notNullable();
          table.string('location').notNullable();
          table.string('higher_unit').notNullable();
          table.string('op_command').notNullable();
          table.string('mission').notNullable();
          table.timestamps(true, true); // Adds created_at and updated_at
        });
      };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('manuever_unit');
};
