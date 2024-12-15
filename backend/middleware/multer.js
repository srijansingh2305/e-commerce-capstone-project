import multer from "multer";

// Configure storage for uploaded files
const storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, file.originalname); // Use original file name
    }
})

const upload = multer({ storage }); // Create multer instance with defined storage

export default upload; // Exporting upload middleware
