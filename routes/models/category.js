const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category_name: {
    type: String,
    required: true,
    maxlength: 255
  },
  tags: {
    type: [Schema.Types.ObjectId],
    ref: "tag",
    required: true
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("category", CategorySchema);
