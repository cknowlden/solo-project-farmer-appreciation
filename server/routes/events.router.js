const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const sqlText = `
    SELECT * FROM "events"
      ORDER BY "date";
    `;
  pool
    .query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('error getting events', dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;
