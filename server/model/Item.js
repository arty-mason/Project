const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customFieldSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

const ItemSchema = new Schema(
  {
    collectionId: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      required: false,
    },
    tags: [String],
    customFields: [customFieldSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Item", ItemSchema);
