const AuthService = require('../services/auth.service');

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  //회원가입
  register = async (req, res, next) => {
    try {
      const userInfo = { ...req.body };
      await this.authService.register(userInfo);
      return res.status(201).json({ message: '회원가입이 완료되었습니다.' });
    } catch (err) {
      next(err);
    }
  };
  //로그인
  userLogin = async (req, res, next) => {
    try {
      const userInfo = { ...req.body };
      await this.authService.userLogin(userInfo);
      res.status(200).json({ message: '로그인이 완료되었습니다.' });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = AuthController;
