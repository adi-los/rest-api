function useThem() {
    const express = require("express")
    const helmet = require("helmet")
    const morgan = require("morgan")
    const app = express()
    app.use(express.static('public'))
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(helmet())
}

module.exports = useThem