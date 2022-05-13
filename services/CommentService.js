const { database } = require('../utils');
const Comment = require('../models/PostModel');

const getAllcomments = async () => {
    return await database.readData(Comment, {})
}

const getAllcommentsbypost = async (post_id) => {
    return await database.readData(Comment, {post: post_id})
}

const getComment = async (id) => {
    return await database.readsingleData(Comment, {_id: id})
}

const saveComment = async (payload) => {
    return await database.createData(Comment, payload)
}

const updateComment = async (id, payload) => {
    return await database.updateData(Comment, {_id: id}, payload)
}

const deleteComment = async (id) => {
    return await database.deleteData(Comment, {_id: id})
}


module.exports = {
    getAllcomments,
    getAllcommentsbypost,
    getComment,
    saveComment,
    updateComment,
    deleteComment
}