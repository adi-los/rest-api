function checkEnv() {
    const express = require("express")
    const app = express()
    const morgan = require("morgan")
    switch(app.get("env")){
        case "development":
            console.log("Morgan Is Disabled !")
        break;

        case "production":
            app.use(morgan("tiny"))
            console.log("Morgan Is Enabled !")
        break;

        default:
            app.use(morgan("tiny"))
            console.log("Morgan Is Enabled ! ===¤ By Default")
    }
}

module.exports = checkEnv


