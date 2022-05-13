const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, "email is required"],
        unique: true 
    },
    username: {
        type: String,
        required: [ true, "Username is required"],
        unique: true 
    },
    password: {
        type: String,
        required: [ true, "Password is required"]
    },
});

module.exports = mongoose.model('User', UserSchema);