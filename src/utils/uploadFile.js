const multer = require('multer');
const path = require('path');

const uploadFilePath = path.resolve(__dirname, '../..', 'public/uploads');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(uploadFilePath));
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
