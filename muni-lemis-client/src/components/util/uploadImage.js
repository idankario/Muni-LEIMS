const fs = require("fs");
// const path = require("path");
const AWS = require("aws-sdk");

const KEY_ID = process.env.KEY_ID_AMAZON;
const SECRET_KEY = process.env.SECRET_KEY_AMAZON;
const Region = process.env.REGION;
const Municipality = process.env.MUNICIPALITY_S3;

// const directoryPath = path.join(__dirname, "Uploads");
const s3 = new AWS.S3({
  accessKeyId: KEY_ID,
  secretAccessKey: SECRET_KEY,
  region: Region,
});
module.exports = {
  UploadImage: async (filename) => {
    const bucketS3 = Municipality;
    const filePath = `${bucketS3}/${filename}`;
    const fileContent = fs.readFileSync(filePath);
    const params = {
      Bucket: bucketS3,
      Key: filePath,
      Body: fileContent,
    };
    s3.upload(params, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } else {
        fs.unlinkSync(filePath);
      }
    });
  },
};
