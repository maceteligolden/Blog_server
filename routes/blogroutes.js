const express = require('express')
const router = express.Router();
const { allPosts, getPost, storePost, updatePost, deletePost, likePost } = require('../controllers/PostController');
const { login, register, changePassword, forgotPassword } = require('../controllers/AuthController');
const { allComments, getComment, storeComment, updateComment, deleteComment } = require('../controllers/CommentController');
const AuthMiddleware = require('../middleware/AuthMiddleware');

//routes
router.route('/blogs')
                

router.route('/blog/:id')
                    .get(AuthMiddleware, storePost)
                    .patch(AuthMiddleware, updatePost)
                    .delete(AuthMiddleware, deletePost)
                    .get(AuthMiddleware, getPost)
                    .patch(AuthMiddleware, likePost);

router.route('/blogs/comment')
                    .get(AuthMiddleware, allComments)
                    .post(AuthMiddleware, storeComment);

router.route('/blog/comment/:id')
                    .get(AuthMiddleware, storeComment)
                    .patch(AuthMiddleware, updateComment)
                    .delete(AuthMiddleware, deleteComment)
                    .get(AuthMiddleware, getComment);

router.route('/login').post(login);

router.route('/register').post(register);

router.route('/changePassword').post(changePassword);

router.route('/forgotpassword').post(forgotPassword);

module.exports = router;