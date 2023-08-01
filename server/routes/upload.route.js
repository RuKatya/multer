const fileMid = require("../middleware/file");

const router = require("express").Router()

router.post("/upload", fileMid.single("avatar"), (req, res) => {
    try {
        console.log(req.dile)
        if (req.file) {
            res.json(req.file)
        }
    } catch (error) {
        console.error('route');
        console.error(error);
    }
})

module.exports = router