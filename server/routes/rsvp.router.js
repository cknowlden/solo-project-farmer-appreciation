const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
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

router.get('/', (req, res) => {
  const sqlText = `
  SELECT * FROM "rsvp" JOIN "events" ON "rsvp".event_id = "events".id ORDER BY "name" ASC;
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

//  ***** ORIGINAL CODE FOR FORM ********
// router.post('/:id', (req, res) => {
//   let event_id = req.params.id;
//   const sqlText = `INSERT INTO "rsvp"
//   ("first_name", "last_name", "email", "phone", "event_id")
//   VALUES
//     ($1, $2, $3, $4, $5);
//     `;
//   const sqlValues = [
//     req.body.first_name,
//     req.body.last_name,
//     req.body.email,
//     req.body.phone === '' ? null : req.body.phone,
//     event_id,
//   ];

//   pool
//     .query(sqlText, sqlValues)
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.log('rsvp failed:', err);
//       res.sendStatus(500);
//     });
// });

router.post('/:id', (req, res) => {
  const event_id = req.params.id;

  // Extract and validate email
  const { first_name, last_name, email, phone } = req.body;

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const sqlText = `
    INSERT INTO "rsvp" ("first_name", "last_name", "email", "phone", "event_id")
    VALUES ($1, $2, $3, $4, $5);
  `;

  const sqlValues = [
    first_name,
    last_name,
    email,
    phone === '' ? null : phone,
    event_id,
  ];

  pool
    .query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error('RSVP failed:', err);
      res.sendStatus(500);
    });
});

// verify if /:id is the correct way to delete rsvp - does user id get sent in url
router.delete('/:id', (req, res) => {
  pool
    .query('DELETE FROM "rsvp" WHERE id=$1', [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error DELETING /api/rsvp', error);
      res.sendStatus(500);
    });
});

module.exports = router;
