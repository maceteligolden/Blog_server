const { getAllcomments, getComment, saveComment, updateComment, deletePost } = require('../services/CommentService')


//show all comment
const allComments = async (req, res) => {
    try{

        const data = await getAllcomments();

        res.json({
            status: 200,
            message: "All comments retrieved",
            data: data
        })  

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

//get Single comment
const getComment = async (req, res) => {
    try{

        const { id } = req.body;

        const comment = await getComment(id);

        res.json({
            status: 200,
            message: "Comment retrieved",
            data: comment
        })

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

//store comment
const storeComment = async (req, res) => {
    try{

        await saveComment(req.body)

        res.json({
            message: "comment saved",
            status: 200,
        })

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

//update comment
const updateComment = async (req, res) => {
    try{

        const {id } = req.body;

        await updateComment(id, req.body)

        res.json({
            status: 200,
            message: "Comment updated"
        })

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

//delete Post
const deleteComment = async (req, res) => {
    try{

        const { id } = req.body;

        const status = await deleteComment(id);

        res.json({
            status: 200,
            message: "Comment deleted"
        })

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

module.exports = {
    allComments,
    getComment,
    storeComment,
    updateComment,
    deleteComment
}