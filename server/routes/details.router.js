const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  let id = req.params.id;
  const queryText = `
    SELECT * FROM "events"
      WHERE "events".id = $1;
    `;
  const queryValues = [id];
  pool
    .query(queryText, queryValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('error getting details', dbErr);
      res.sendStatus(500);
    });
});

router.get('/count/:id', (req, res) => {
  let id = req.params.id;
  const queryText = `SELECT COUNT("rsvp".id) FROM "rsvp" JOIN "events" ON "rsvp".event_id = "events".id WHERE "events".id = $1;`;
  const queryValues = [id];
  pool
    .query(queryText, queryValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('error getting details', dbErr);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  pool
    .query('DELETE FROM "events" WHERE id=$1', [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error DELETING /api/details', error);
      res.sendStatus(500);
    });
});

module.exports = router;
