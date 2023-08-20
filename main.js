const express = require("express")
const Joi = require("joi")
const helmet = require("helmet")
const morgan = require("morgan")
const debug = require("debug")

const app = express()

app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("Welcome In Your Window To Start Learning REST API")
})





const port = process.env.PORT || 3000 
app.listen(port, () => console.log(`You Are Listening On Port: ${port}`))