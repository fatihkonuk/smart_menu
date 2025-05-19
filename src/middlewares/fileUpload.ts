import fs from "fs";
import multer from "multer";
import path from "path";

const uploadDir = path.join(__dirname, "../..", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Upload klasörünü ve dosya adını ayarla
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// Sadece resim dosyalarına izin ver
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Sadece resim dosyalarına izin verilir."));
  }
};

export default multer({
  storage,
  fileFilter,
  limits: { fileSize: 500 * 1024 * 1024 }, // max 5MB
});
