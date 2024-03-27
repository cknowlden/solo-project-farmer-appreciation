const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/:id', (req, res) => {
  let event_id = req.params.id;
  const sqlText = `INSERT INTO "rsvp"
  ("first_name", "last_name", "email", "phone", "event_id")
  VALUES
    ($1, $2, $3, $4, $5, $6);
    `;
  const sqlValues = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.phone,
    event_id,
  ];

  pool
    .query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('rsvp failed:', err);
    });
});

module.exports = router;
