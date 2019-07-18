const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    content: {
        type: String,
        maxlength: 800,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        unique: true,
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'post',
        unique: true,
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('comment', CommentSchema);