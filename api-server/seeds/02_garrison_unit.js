/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('garrison_unit').del()
  await knex('garrison_unit').insert([
    {
      company: 'Alpha',
      battalion: '91 CA BN',
      command: 'USASOC'
    },
    {
      company: 'Alpha',
      battalion: '92 CA BN',
      command: 'USASOC'
    },
    {
      company: 'Alpha',
      battalion: '96 CA BN',
      command: 'USASOC'
    },
    { 
      company: 'Alpha',
      battalion: '97 CA BN',
      command: 'USASOC'
    },
    {
      company: 'Alpha',
      battalion: '98 CA BN',
      command: 'USASOC'
    },
  ]);
};
