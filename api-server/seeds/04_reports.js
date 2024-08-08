/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reports').del()
  await knex('reports').insert([
    {
      report_type: 'OPSUM',
      event_dtg: '0109000ZJAN24',
      lat_long: '-17.84809628845009, 31.057942916034236',
      reporting_unit_id: 1,
      report_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla convallis, nulla eget cursus congue, ex nulla vestibulum purus, a tempus nunc nulla at dui. Sed euismod interdum ligula, sit amet laoreet felis. Mauris vel felis nec velit facilisis elementum. Cras a nisi ac ex posuere congue. Duis ut sapien vel arcu ultrices cursus. Curabitur luctus orci sed magna posuere, a dapibus libero posuere. Nam eget erat vel magna ultricies aliquam. Sed nec lorem vitae justo consequat posuere.',
      disposition: 'green',
      additional_poi: '-16.476328435416285, 32.485500973078736'
    },
    { 
      report_type: 'OPSUM',
      event_dtg: '0209000ZJAN24',
      lat_long: '57.30307760209373, -5.000650841860033',
      reporting_unit_id: 2,
      report_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla convallis, nulla eget cursus congue, ex nulla vestibulum purus, a tempus nunc nulla at dui. Sed euismod interdum ligula, sit amet laoreet felis. Mauris vel felis nec velit facilisis elementum. Cras a nisi ac ex posuere congue. Duis ut sapien vel arcu ultrices cursus. Curabitur luctus orci sed magna posuere, a dapibus libero posuere. Nam eget erat vel magna ultricies aliquam. Sed nec lorem vitae justo consequat posuere.',
      disposition: 'green',
      additional_poi: '57.02522953743975, -3.634762113647933'
    },
    {
      report_type: 'CONREP',
      event_dtg: '0309000ZJAN24',
      lat_long: '33.65689939348934, 36.510451831611526',
      reporting_unit_id: 3,
      report_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla convallis, nulla eget cursus congue, ex nulla vestibulum purus, a tempus nunc nulla at dui. Sed euismod interdum ligula, sit amet laoreet felis. Mauris vel felis nec velit facilisis elementum. Cras a nisi ac ex posuere congue. Duis ut sapien vel arcu ultrices cursus. Curabitur luctus orci sed magna posuere, a dapibus libero posuere. Nam eget erat vel magna ultricies aliquam. Sed nec lorem vitae justo consequat posuere.',
      disposition: 'red',
      additional_poi: '36.093237600147916, 37.11094557477189'
    },
    {
      report_type: 'Assessment',
      event_dtg: '0409000ZJAN24',
      lat_long: '35.81539423305641, 139.62210334802143',
      reporting_unit_id: 4,
      report_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla convallis, nulla eget cursus congue, ex nulla vestibulum purus, a tempus nunc nulla at dui. Sed euismod interdum ligula, sit amet laoreet felis. Mauris vel felis nec velit facilisis elementum. Cras a nisi ac ex posuere congue. Duis ut sapien vel arcu ultrices cursus. Curabitur luctus orci sed magna posuere, a dapibus libero posuere. Nam eget erat vel magna ultricies aliquam. Sed nec lorem vitae justo consequat posuere.',
      disposition: 'yellow',
      additional_poi: '33.080714754126184, 129.99278129006632'
    },
    {
      report_type: 'OPSUM',
      event_dtg: '0509000ZJAN24',
      lat_long: '-17.89700199017249, -63.26417510943661',
      reporting_unit_id: 5,
      report_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla convallis, nulla eget cursus congue, ex nulla vestibulum purus, a tempus nunc nulla at dui. Sed euismod interdum ligula, sit amet laoreet felis. Mauris vel felis nec velit facilisis elementum. Cras a nisi ac ex posuere congue. Duis ut sapien vel arcu ultrices cursus. Curabitur luctus orci sed magna posuere, a dapibus libero posuere. Nam eget erat vel magna ultricies aliquam. Sed nec lorem vitae justo consequat posuere.',
      disposition: 'yellow',
      additional_poi: '-10.883809818079193, -65.39882387631425'
    },
  ]);
};
