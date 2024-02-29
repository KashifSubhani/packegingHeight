import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req:any, file:any, cb:any) {
    cb(null, 'uploaded/'); // Specify the directory where files will be stored
  },
  filename: function (req:any, file:any, cb:any) {
    cb(null, file.originalname); // Use the original filename for storage
  },
});

const upload = multer({ storage: storage });

export { upload };