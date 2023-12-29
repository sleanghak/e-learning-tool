const s3 = require(".");
const fs = require("fs");

const upload = async (path, file) => {
  const fileStream = fs.createReadStream(file.path);
  console.log("Bucket Nmae:::", process.env.S3_BUCKET_NAME);
  console.log(file.filename);
  const uploadParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Body: fileStream,
    Key: `${path}${file.filename}`,
  };
  return s3.upload(uploadParams).promise();
};
const getUrl = async (key) => {
  const downloadParams = {
    Key: key,
    Bucket: process.env.S3_BUCKET_NAME,
  };

  return s3.getObject(downloadParams).createReadStream();
};

module.exports = {
  upload,
  getUrl,
};
