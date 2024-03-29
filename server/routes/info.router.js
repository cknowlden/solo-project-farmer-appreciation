const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const sqlText = `
    SELECT * FROM "information"
    `;
  pool
    .query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('error getting information', dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;
