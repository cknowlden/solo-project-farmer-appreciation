const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:zip', (req, res) => {
  const queryText = `
  SELECT * FROM "events" WHERE "events".zip = $1;
    `;
  const queryValues = [req.params.zip];
  pool
    .query(queryText, queryValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('error getting events', dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;
