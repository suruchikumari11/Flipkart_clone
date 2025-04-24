import path from 'path';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'temp/')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now() + path.extname(file.originalname))
    }
  })
  
  export const upload = multer({ 
    storage: storage ,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB file size limit
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase(); //.jpeg
      
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.mp4','.avif'];


        if (!allowedExtensions.includes(ext)) {
            return cb(new Error(`Unsupported file type ${ext}`), false);
        }

        cb(null, true);
    }
  });