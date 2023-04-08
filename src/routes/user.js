const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');
const { ROUTES } = require('../utils/constants');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all users
 *     tags: [Users]
 *     parameters:
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *        description: The name of the user
 *     responses:
 *       200:
 *         description: The list of the users
 */
router.get(ROUTES.USERS, getUsers);

router.get(ROUTES.USER, getUser);

router.post(ROUTES.USERS, createUser);

router.put(ROUTES.USER, updateUser);

router.delete(ROUTES.USER, deleteUser);

module.exports = router;
