const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');

const router = Router();
const authController = new AuthController();

router.post('/register', authController.register);
router.post('/login', authController.userLogin);
router.post('/login/check-id', authController.checkEmail);

module.exports = router;
