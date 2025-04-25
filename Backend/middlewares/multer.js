
const multer = require("multer");

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
}).single('imageFile') // 👈 It expects the file field to be called 'imageFile'

module.exports = upload;

























// // multer.js
// const multer = require("multer");

// const storage = multer.memoryStorage(); // 👈 stores file in memory, not on disk

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
// });

// module.exports = upload;
