const express = require('express');
const { uploadFile, deleteFile, updateFile } = require('../controllers/upload-file');
const upload = require('../utils/uploadFile');
const { ROUTES } = require('../utils/constants');
const router = express.Router();

router.post(ROUTES.UPLOAD, upload.single('file'), uploadFile);

// delete file from s3 bucket

router.delete(ROUTES.AWS_S3_FILE, deleteFile);

// update file from s3 bucket

router.put(ROUTES.AWS_S3_FILE, upload.single('file'), updateFile);

module.exports = router;
