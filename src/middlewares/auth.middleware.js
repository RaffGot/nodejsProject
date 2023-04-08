// auth middleware

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs/jwt.config');

const authMiddleware = (req, res, next) => {
  const auth = req.headers['Authorization'] || req.headers['authorization'];
    if (!auth) {
        return res.status(401).json({ message: 'Unauthorized' });
        }
    const token = auth.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    }
    );
};

module.exports = { authMiddleware };