const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostShema = new Schema ({
    title: {
        type: String,
        required: true,
        maxlength: 255,
    },
    content: {
        type: String,
        required: true,
        maxlength: 800,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    tags: {
        type: Array, 
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