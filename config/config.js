
function getAppDetails() {
    const config = require("config")
    const debug_app = require("debug")("app:startup")
    debug_app(`app-title: ${config.get("app_name")}`)
    debug_app(`app-owner: ${config.get("app_owner")}`)
    debug_app(`app-version: ${config.get("app_version")}`)
    debug_app(`app-login-status: ${config.get("security_credentials.login_status")}`)
    debug_app(`app-email: ${config.get("security_credentials.email")}`)
    debug_app(`app-username: ${config.get("security_credentials.username")}`)
    debug_app(`app-password: ${config.get("security_credentials.password")}`)
}

module.exports = getAppDetails