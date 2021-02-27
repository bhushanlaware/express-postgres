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

const addDays = (days, startDate) => (days || days === 0) &&
  new Date(new Date(startDate).getTime() + (days * 24 * 60 * 60 * 1000));

module.exports = {
  upload,
  uploadMultipleFiles,
  addDays
}
