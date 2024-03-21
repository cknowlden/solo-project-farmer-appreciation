const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  let id = req.params.id;
  const queryText = `
    SELECT * FROM "events"
      WHERE "events".id = ($1);
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

module.exports = router;
