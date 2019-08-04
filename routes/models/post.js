const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostShema = new Schema ({
    title: {
        type: String,
        required: true,
        maxlength: 150,
    },
    content: {
        type: String,
        required: true,
        maxlength: 2000,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    tags: {
        type: [Schema.Types.ObjectId],
        ref: 'tag',    
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    update_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('post', PostShema);