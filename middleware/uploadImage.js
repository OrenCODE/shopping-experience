const path   = require('path');
const multer = require('multer');

const UPLOAD_DIR = path.join(__dirname, '../public/uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename:    (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${req.params.id}-${Date.now()}${ext}`);
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image uploads allowed'), false);
        }
        cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB max
});

module.exports = upload;
