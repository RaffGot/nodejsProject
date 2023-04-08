const express = require('express');
const { authController } = require('../controllers/auth.controller');
const { ROUTES } = require('../utils/constants');
const router = express.Router();


/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Returns the list of all users
 *     tags: [auth]
 *     responses:
 *       200:
 *         description: The list of the users
 */
 router.post(ROUTES.LOGIN,authController);

module.exports = router;