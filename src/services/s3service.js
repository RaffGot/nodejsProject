const { S3 } = require('aws-sdk');

const s3Cridentials = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// s3 Upload v2
const s3Upload = async (file, bucketName) => {
  const s3 = s3Cridentials;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${process.env.AWS_BUCKET_FOLDER}/${file.originalname}`,
    Body: file.buffer,
  };
  return await s3.upload(params).promise();
};

// s3 delete v2

const s3Delete = async (file, bucketName) => {
  const s3 = s3Cridentials;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${process.env.AWS_BUCKET_FOLDER}/${file.originalname}`,
  };

  return await s3.deleteObject(params).promise();
};

module.exports = { s3Upload, s3Delete };
