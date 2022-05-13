const { getAllposts, getPost, savePost, updatePost, deletePost } = require('../services/PostService')
const { getAllcommentsbypost } = require('../services/CommentService')


//show all post
const allPosts = async (req, res) => {
    try{

        const data = await getAllposts();

        res.json({
            status: 200,
            message: "All posts retrieved",
            data: data
        })        

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

//get Single post
const getPost = async (req, res) => {
    try{

        const { id } = req.body;

        const post = await getPost(id);

        const comments = await getAllcommentsbypost(id)

        res.json({
            status: 200,
            message: "Post retrieved",
            data: {
                post: post,
                comments: comments
            }
        })

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

//store Post
const storePost = async (req, res) => {
    try{

        await savePost(req.body)

        res.json({
            message: "post saved",
            status: 200,
        })

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

//update Post
const updatePost = async (req, res) => {
    try{

        const {id } = req.body;

        await updatePost(id, req.body)

        res.json({
            status: 200,
            message: "Post updated"
        })

    }catch(err){
        res.json({
            message: err.message,
            status: 500
        })
    }
}

//delete Post
const deletePost = async (req, res) => {
    try{

        const { id } = req.body;

        const status = await deletePost(id);

        res.json({
            status: 200,
            message: "Post deleted"
        })

    }catch(err){
        res.json({msg: err.message})
    }
}

//like Post
const likePost = async (req, res) => {
    try{

        const { id } = req.body;

        const post = await getPost(id)

        const addLike = post.favourite + 1

        await updatePost(id, {favourite: addLike})

    }catch(err){
        res.json({msg: err.message})
    }
}

module.exports = {
    allPosts,
    getPost,
    storePost,
    updatePost,
    deletePost,
    likePost
}