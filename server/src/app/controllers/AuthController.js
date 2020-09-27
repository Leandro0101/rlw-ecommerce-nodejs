const jwt = require("jsonwebtoken");
require("dotenv").config();
function generateToken(params) {
    return jwt.sign({ params }, process.env.SECRET, { expiresIn: "48h" });
}

module.exports = {
    async store(req, res) {
        //next chapters
    }
}