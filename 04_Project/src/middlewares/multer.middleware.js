import multer from "multer";
// Modules

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// Create Local Storage

const Upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});
//Upload

export { Upload };
