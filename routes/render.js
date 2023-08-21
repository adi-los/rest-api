const express = require("express")
const router = express.Router()
router.get("/", (req, res) => {
    res.status(200).render("index", {myTitle: "Home Page", first_text: "Section 01", second_text: "Section 02", third_text: "Section 03", fourth_text: "Section 04", fifth_text: "Section 05", sixth_text: "Section 06"})
})


module.exports = router