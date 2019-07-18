const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema ({
    tag_name: {
        type: String,
        unique: true,
        maxlength: 255,
    },
    tag_description: {
        type: String,
        required: true,
        maxlength: 255,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
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