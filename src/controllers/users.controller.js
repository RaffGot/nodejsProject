const user = require('../models/user');
const bcrypt = require('bcrypt');
//get all users
const getUsers = async (req, res) => {
  const users = await user.find();
  return res.json({ data: users });
};
// get user
const getUser = async (req, res) => {
  const { id } = req.params;
  const userId = await user.findById(id);
  return res.json({ data: userId, message: 'User found' });
};

// create user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const passwordCrypt = await bcrypt.hash(password, 10);
  const newUser = new user({ name, email, password: passwordCrypt });
  await newUser.save();
  return res.json({ data: newUser, message: 'User created' });
};

// update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const passwordCrypt = await bcrypt.hash(password, 10);
  const updateUser = { name, email, password: passwordCrypt };
  await user.findByIdAndUpdate(id, updateUser);
  return res.json({ data: updateUser, message: 'User updated' });
};

// delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  await user.findByIdAndDelete(id);
  return res.json({ data: 'User deleted' });
};

module.exports = { getUsers, createUser, getUser, updateUser, deleteUser };
