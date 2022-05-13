const express = require('express')
const router = express.Router();
const { login, register, changePassword, forgotPassword } = require('../controllers/AuthController');
//routes

router.route('/login').post(login);

router.route('/register').post(register);

router.route('/changePassword').post(changePassword);

router.route('/forgotpassword').post(forgotPassword);

module.exports = router;