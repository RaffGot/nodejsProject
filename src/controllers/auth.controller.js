const User = require('../models/user');
const bcrypt = require('bcrypt');
// const { ROLES } = require('../utils/constants');
const { generateToken } = require('../utils/jwt.utils');

// jwt token expiration time
const TOKEN_EXPIRATION_TIME = '1h';

//jwt autehntication
const authController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user, TOKEN_EXPIRATION_TIME);

  return res.json({ token: token });
};

//jwt authorization
const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      next();
    },
  ];
};

module.exports = { authController, authorize };
