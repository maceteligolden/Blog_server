const { database } = require('../utils');
const Post = require('../models/PostModel');

const getAllposts = async () => {
    return await database.readData(Post, {})
}

const getPost = async (id) => {
    return await database.readsingleData(Post, {_id: id})
}

const savePost = async (payload) => {
    return await database.createData(Post, payload)
}

const updatePost = async (id, payload) => {
    return await database.updateData(Post, {_id: id}, payload)
}

const deletePost = async (id) => {
    return await database.deleteData(Post, {_id: id})
}


module.exports = {
    getAllposts,
    getPost,
    savePost,
    updatePost,
    deletePost
}