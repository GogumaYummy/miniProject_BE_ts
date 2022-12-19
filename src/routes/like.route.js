const { Router } = require('express');
const LikeController = require('../controllers/like.controller');
const authMiddleware = require('../middlewares/auth.mddleware');

const router = Router();
const likeController = new LikeController();

router.post('/posts/:postId', authMiddleware.loggedInYet, likeController.changeLike);

module.exports = router;
