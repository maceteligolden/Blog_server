const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    post: {
        type: mongoose.SchemaTypes.ObjectID,
    },
    body: {
        type: String,
        required: [true, "body is required"]
    },
    parent: {
        type: mongoose.SchemaTypes.ObjectID
    }
});

module.exports = mongoose.model("Comment", CommentSchema)

