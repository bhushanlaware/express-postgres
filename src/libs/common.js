const multer = require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage }).single('file');
const uploadMultipleFiles = multer({ storage }).any();
module.exports = {
  upload,
  uploadMultipleFiles,
}