const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    content: {
        type: String,
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
    comment_id: {
        type: Schema.Types.ObjectId,
        ref: 'comment',
        unique: true,
    },
    tag_id: {
        type: Schema.Types.ObjectId,
        ref: 'tag',
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