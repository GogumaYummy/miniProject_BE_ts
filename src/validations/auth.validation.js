const joi = require('joi');

//회원가입 유효성 검사
exports.registerRequestPattern = joi.object().keys({
  email: joi.string().email().required(),
  nickname: joi
    .string()
    .regex(/^[a-zA-Z0-9가-힣_]{2,20}$/)
    .required(),
  password: joi.string().min(8).max(20).required(),
});
//로그인 유효성 검사
exports.loginRequestPattern = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required().min(8).max(20),
});
//토큰 유효성 검사
exports.loginResponsePattern = joi
  .string()
  .regex(/^[\w\d-_]+\.[\w\d-_]+\.[\w\d-_]+$/);
//이메일 유효성 검사
exports.emailPattern = joi.string().email().required();
//닉네임 유효성 검사
exports.nicknamePattern = joi
  .string()
  .regex(/^[a-zA-Z0-9가-힣_]{2,20}$/)
  .required();
