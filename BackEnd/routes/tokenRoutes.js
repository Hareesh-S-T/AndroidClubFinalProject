const jwt = require('jsonwebtoken');

function tokenRoutes(req, res, next) {
    const token = req.header('auth-token');
    if (token) {
        try {
            const tokenCheck = jwt.verify(token, process.env.JWT_KEY);
            req.user = tokenCheck;
            next();
        } catch (err) {
            return res.status(401).send("Access denied.");
        }
    } else {
        return res.status(401).send("Access denied.");
    }
}