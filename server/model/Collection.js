const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemsFieldTemplateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  valueType: {
    type: String,
    required: true,
  },
});

const collectionSchema = new Schema(
  {
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
    type: {
      type: String,
      required: true,
    },
    tags: [String],
    userId: {
      type: String,
      required: true,
    },
    itemsFieldTemplate: [itemsFieldTemplateSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Collection", collectionSchema);
