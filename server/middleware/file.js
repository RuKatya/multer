const multer = require("multer")

// Creating place where the image will be save
const storage = multer.diskStorage({
    //Path to folder with images that we save
    //destination function have 3 parameters: 1. request, 2. file 3. callback
    destination(req, file, cb) {
        cb(null, 'images/') //error, destination
    },

    //Name of file that will saved in server
    filename(req, file, cb) {
        cb(null, `${Math.random()}-${file.originalname}`) //error, name of file
    }
})

// types of files that we can save in server
const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({ storage, fileFilter })