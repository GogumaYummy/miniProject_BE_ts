const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('../config/s3');
const postsValidation = require('../validations/posts.validation');
const logger = require('../config/logger');

module.exports = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    key(req, file, callback) {
      callback(null, `mini-project/${Date.now().toString()}_${file.originalname}`);
    },
    acl: 'public-read',
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
