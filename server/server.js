const express = require("express")
const app = express()
const PORT = 5050
const path = require("path")

app.use(express.json({ extended: true }))
app.use("/images", express.static(path.join(__dirname, 'images')))
app.use("/api", require("./routes/upload.route"))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})