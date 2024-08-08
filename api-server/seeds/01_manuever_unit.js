/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('manuever_unit').del()
  await knex('manuever_unit').insert([
    {
      unit_name: 'CAT 9111',
      location: 'Maputo, Mozambique',
      higher_unit: 'SOTF Lion King',
      op_command: 'SOCAF',
      mission: 'GARISH ZEBRA'
    },
    {
      unit_name: 'CAT 9211',
      location: 'Glasgow, Scotland',
      higher_unit: 'SOTF Braveheart',
      op_command: 'SOCEUR',
      mission: 'DISTANT CARNYX'
    },
    {
      unit_name: 'CAT 9611',
      location: 'Damascus, Syria',
      higher_unit: 'SOTF Arrakis',
      op_command: 'SOCCENT',
      mission: 'TAME ARRAKIS'
    },
    {
      unit_name: 'CAT 9711',
      location: 'Tokyo, Japan',
      higher_unit: 'SOTF Gundam',
      op_command: 'SOCPAC',
      mission: 'HACHI ROKU'
    },
    {
      unit_name: 'CAT 9811',
      location: 'Sucre, Bolivia',
      higher_unit: 'SOTF Wildlands',
      op_command: 'SOCSOUTH',
      mission: 'BREAKING BAD'
    },
  ]);
};
