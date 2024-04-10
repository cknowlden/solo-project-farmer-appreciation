const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const aws = require('aws-sdk');

const s3Client = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

router.post('/image', async (req, res) => {
  try {
    const { imageName } = req.query;
    const imageData = req.files.image.data;

    const uploadedFile = await s3Client.upload({
      Bucket: 'farmer-appreciation-app',
      Key: `images/${imageName}`, //folder/file
      Body: imageData, //image data to upload
      // ACL: 'public-read',
    });
    //This is the URL the file can be accessed at
    console.log(uploadedFile.Location);

    //TODO: insert the URL into the database
    //Send OK back to client
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
