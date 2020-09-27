const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth');
function generateToken(params) {
    return jwt.sign({ params }, authConfig.secret, { expiresIn: "48h" });
}

module.exports = {
    async store(req, res) {
        //next chapters
    }
}