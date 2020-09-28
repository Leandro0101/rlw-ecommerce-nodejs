import jwt, { decode } from "jsonwebtoken";
import authConfig from "../../config/auth.json";
export default (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).json({ error: "no token provided" });

    const parts = authHeader.split(" ");

    if (parts.length !== 2)
        return res.status(401).json({ error: "token error" });

    const [bearer, token] = parts;

    if (!/^Bearer$/i.test(bearer))
        return res.status(401).json({ error: "Token with incorrect format" });

    jwt.verify(token, authConfig.secret, (error, decoded) => {
        if (error) return res.status(401).json({ error: "token invalid" });
        req.user = decoded.params;
        next();
    });

}