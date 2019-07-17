const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema ({
    tag_name: {
        type: String,
        unique: true,
    },
    tag_description: {
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
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'category',
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

module.exports = mongoose.model('tag', TagSchema);