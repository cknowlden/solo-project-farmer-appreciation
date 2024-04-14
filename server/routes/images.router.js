const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// const {
//   GetObjectCommand,
//   PutObjectCommand,
//   S3Client,
// } = require('@aws-sdk/client-s3');

// const s3Client = new S3Client({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// router.post('/', async (req, res) => {
//   try {
//     const { imageName, imageType } = req.query;
//     const imageData = req.files.image.data;
//     const imageKey = `images/${imageName}`; // folder/file
//     const command = new PutObjectCommand({
//       Bucket: process.env.AWS_BUCKET,
//       Key: imageKey, // folder/file
//       Body: imageData, // image data to upload
//     });

//     const response = await s3Client.send(command);
//     console.log(response); // Used for debugging
//     await pool.query(
//       `
//           INSERT INTO "images" ("name", "type")
//           VALUES ($1, $2);
//       `,
//       [imageName, imageType]
//     );

//     // Send OK back to client
//     res.sendStatus(201);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     let result = await pool.query(`
//           SELECT * FROM "images";
//       `);
//     res.send(result.rows);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
