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
  // `SELECT COUNT("rsvp".id) FROM "rsvp" JOIN "events" ON "rsvp".event_id = "events".id WHERE "events".id = $1;`
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
    // req.body.image,
    '/images/lighthouse.jpg',
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

router.put('/:id', rejectUnauthenticated, (req, res) => {
  // const userId = req.user.id;
  const id = req.params.id;
  const sqlText = `UPDATE "events"
  SET "name" = $1, "date" = $2, "location" = $3, "street" = $4, "city" = $5, "state" = $6, "zip" = $7, "cost" = $8, "image" = $9, "details" = $10 WHERE "id" = $11;
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
    // req.body.image,
    '/images/lighthouse.jpg',
    req.body.details,
    id,
    // userId,
  ];
  pool
    .query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Could not update event:', err);
    });
});
module.exports = router;
