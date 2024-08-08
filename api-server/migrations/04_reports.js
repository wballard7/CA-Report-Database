/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('reports', function (table) {
      table.increments('id').primary();
      table.string('report_type').notNullable();
      table.string('event_dtg').notNullable();
      table.string('lat_long').notNullable();
      table.integer('reporting_unit_id').unsigned().notNullable();
      table.text('report_body').notNullable();
      table.string('disposition').notNullable();
      table.string('additional_poi').notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at

      table.foreign('reporting_unit_id').references('id').inTable('users').onDelete('CASCADE');
    });
  };

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
return knex.schema.dropTable('reports');
};
