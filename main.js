// MODULES && MIDDLEWARES
const express = require("express")
const Joi = require("joi")
const debug_app = require("debug")("app:startup")
const debug_db = require('debug')("app:db")
const app_details = require("./config/config")
const myMiddleWars = require("./middlewares/uses")
const checkEnv = require("./middlewares/env_setup")
const app = express()
const users_api = require("./routes/api")
const home_api = require("./routes/home")
const render_api = require("./routes/render")


// Running Middlewares Functions
app_details()
myMiddleWars()
checkEnv()

// SETTING UP PUG ENGINE
app.set("view engine", "pug")
app.set("views", "./views")

// ROUTING SETUP
app.use("/", home_api)
app.use("/api/users", users_api)
app.use("/home", render_api)




const port = process.env.PORT || 3000  
app.listen(port, () => console.log(`You Are Listening On Port: ${port} at: http://localhost:${port}`))
