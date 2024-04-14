const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} = require('@aws-sdk/client-s3');

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

const s3Client = new S3Client({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

router.post('/create', rejectUnauthenticated, async (req, res) => {
  //----------------------------AWS S3 Bucket Upload------------------//
  // const s3Client = new aws.S3({
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  //   region: process.env.AWS_REGION,
  // });

  try {
    const { imageName } = req.query;
    const imageData = req.files.image.data;
    console.log(imageName);
    console.log(req.files);
    const imageKey = `images/${imageName}`; // folder/file
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET,
      Key: imageKey, // folder/file
      Body: imageData, // image data to upload
    });
    const uploadedFile = await s3Client.send(command);
    console.log('***********location', uploadedFile.location);
    console.log('!!!!!!!uploadedFile', uploadedFile);

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
      imageName,
      req.body.details,
      userId,
    ];
    await pool
      .query(sqlText, sqlValues)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('event creation failed:', err);
        res.sendStatus(500);
      });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/:imageName', async (req, res) => {
  try {
    const { imageName } = req.params;
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET,
      Key: `images/${imageName}`, // folder/file
    });
    const data = await s3Client.send(command);
    data.Body.pipe(res);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
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
    req.body.image,
    req.body.details,
    id,
  ];
  pool
    .query(sqlText, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Could not update event:', err);
    });
});

module.exports = router;
