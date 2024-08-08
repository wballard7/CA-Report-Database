/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { 
      manuever_unit_id: 1,
      position: 'Team Chief',
      grade: 'O-3',
      last_name: 'Archer',
      first_name: 'Danny',
      adcon_id: 1,
    },
    {
      manuever_unit_id: 2,
      position: 'Team Chief',
      grade: 'O-3',
      last_name: 'Wallace',
      first_name: 'William',
      adcon_id: 2,
    },
    {
      manuever_unit_id: 3,
      position: 'Team Chief',
      grade: 'O-3',
      last_name: 'Atreides',
      first_name: 'Paul',
      adcon_id: 3,
    },
    {
      manuever_unit_id: 4,
      position: 'Team Chief',
      grade: 'O-3',
      last_name: 'Fujiwara',
      first_name: 'Takumi',
      adcon_id: 4,
    },
    {
      manuever_unit_id: 5,
      position: 'Team Chief',
      grade: 'O-3',
      last_name: 'Villa',
      first_name: 'Pancho',
      adcon_id: 5,
    },
  ]);
};
