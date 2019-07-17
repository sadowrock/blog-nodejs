const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostShema = new Schema ({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    comment_id: {
        type: Schema.Types.ObjectId, 
        ref: 'comment',
        required: true,
    },
    tag_id: {
        type: Schema.Types.ObjectId, 
        ref: 'tag', 
        required: true,
    },
    created_at: {
        type: Date,
    },
    update_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('post', PostShema);