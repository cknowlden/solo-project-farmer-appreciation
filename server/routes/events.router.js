const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

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

router.post('/create', rejectUnauthenticated, (req, res) => {
  console.log('create event req body', req.body);
  const userId = req.user.id;
  const sqlText = `INSERT INTO "events"
  ("name", "date", "location", "street", "city", "state", "zip", "cost", "image", "details", "userid")
  VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
    `;
  const sqlValues = [
    req.body.name,
    req.body.date,
    req.body.location,
    req.body.street,
    req.body.city,
    req.body.state,
    req.body.zip,
    req.body.cost,
    req.body.image,
    req.body.details,
    userId,
  ];
  pool
    .query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('event creation failed:', err);
    });
});

module.exports = router;
