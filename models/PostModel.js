const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    body: {
        type: String,
        required: [true, "body is required"]
    },
    author: {
        type: mongoose.SchemaTypes.ObjectID,
    },
    favourite: {
        type: Number,
    }
});

module.exports = mongoose.model("Post", PostSchema);