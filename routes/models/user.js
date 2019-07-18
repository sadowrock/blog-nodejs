const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        maxlength: 25,
        minlength: 6,
    },
    password: {
        type: String,
        required: true,
        maxlength: 25,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 25,
        minlength: 6,
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

 
module.exports = mongoose.model('user', UserSchema);