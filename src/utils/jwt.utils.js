// generate token
const jwt = require('jsonwebtoken');

const generateToken = (user, expiresIn) => {
  const { _id, name, email, role } = user;
  const payload = {
    id: _id,
    name,
    email,
    role,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

module.exports = { generateToken };
