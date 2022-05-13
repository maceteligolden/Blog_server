const express = require('express')
const router = express.Router();
const { allComments, getComment, storeComment, updateComment, deleteComment } = require('../controllers/CommentController');
const AuthMiddleware = require('../middleware/AuthMiddleware');

//routes

router.route('/blogs/comment')
                    .get(AuthMiddleware, allComments)
                    .post(AuthMiddleware, storeComment);

router.route('/blog/comment/:id')
                    .get(AuthMiddleware, storeComment)
                    .patch(AuthMiddleware, updateComment)
                    .delete(AuthMiddleware, deleteComment)
                    .get(AuthMiddleware, getComment);

module.exports = router;