// requirements
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5080;
const knex = require ("knex")(
    require("./knexfile.js")[process.env.NODE_ENV || "development"]
)
// middleware
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.status(200).send('The CAR Database is up and running');
});

app.get('/users', (req, res) => {
    knex('users')
      .select('*')
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again',
        }),
      );
  });

  app.post('/users', async (req, res) => {
    const { manuever_unit_id, position, grade, last_name, first_name, adcon_id } = req.body;
    console.log('Received request to make account:', req.body);
  
    try {
      const [insertedId] = await knex('users').insert({
        manuever_unit_id,
        position,
        grade,
        last_name,
        first_name,
        adcon_id,
      }).returning('id'); 
  
      res.status(201).json({ id: insertedId });
    } catch (err) {
      res.status(500).json({
        message: 'An error occurred while creating the account. Please try again later.',
      });
    }
  });
  

  app.get('/manuever_unit', (req, res) => {
    knex('manuever_unit')
      .select('*')
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res.status(404).json({
          message:
            'The unit you are looking for could not be found.',
        }),
      );
  });

app.get('/reports', (req, res) => {
    knex('reports')
      .select('*')
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res.status(404).json({
          message:
            'The reports you are looking for could not be found.',
        }),
      );
  });

app.get('/reports/:id', (req, res) => {
    knex('reports')
      .select('*')
      .where({ id: req.params.id })
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res.status(404).json({
          message:
            'The report you are looking for could not be found.',
        }),
      );
  });

app.get('/reports/search', (req, res) => {
  const { query } = req.query; 

  knex('reports')
    .where('report_body', 'like', `%${query}%`)
    .orWhere('report_type', 'like', `%${query}%`)
    .select('*')
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          'The reports you are looking for could not be found.',
      }),
    );
});

app.post('/reports', async (req, res) => {
  const { report_type, event_dtg, lat_long, reporting_unit_id, report_body, disposition, additional_poi } = req.body;
  console.log('Received report submission:', req.body);

  try {
    const [insertedId] = await knex('reports').insert({
      report_type, 
      event_dtg, 
      lat_long, 
      reporting_unit_id, 
      report_body, 
      disposition, 
      additional_poi
    }).returning('id'); 

    res.status(201).json({ id: insertedId + 'added successfully'});
  } catch (err) {
    res.status(500).json({
      message: 'Account Creation error.',
    });
  }
});

app.put('/reports/:id', async (req, res) => {
  const { id } = req.params;
  const { report_type, event_dtg, lat_long, reporting_unit_id, report_body, disposition, additional_poi } = req.body;

  try {
    const updatedRows = await knex('reports')
      .where({ id })
      .update({
        report_type,
        event_dtg,
        lat_long,
        reporting_unit_id,
        report_body,
        disposition,
        additional_poi
      });

    if (updatedRows > 0) {
      res.status(200).json({ message: 'Report updated successfully.' });
    } else {
      res.status(404).json({ message: 'Report not found.' });
    }
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while updating the report.',
    });
  }
});

app.delete('/reports/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRows = await knex('reports')
      .where({ id })
      .del();
    if (deletedRows > 0) {
      res.status(200).json({ message: 'Report deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Report not found.' });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Unable to delete the report at this time.',
    });
  }
});

app.get('/garrison', (req, res) => {
  knex('garrison_unit')
    .select('*')
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found.',
      }),
    );
});




// listen
app.listen(port, () => {
    console.log("App running on port:", port);
});