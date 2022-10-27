const ItemModel = require("../model/Item");

const createItem = async (itemData) => {
  const model = new ItemModel(itemData);
  await model.save();
  return model.toObject();
};

const getItemById = async (itemId) => {
  const model = await ItemModel.findOne({ _id: itemId });
  return model.toObject();
};

const getItemsList = async (from, to) => {
  const models = await ItemModel.find({})
    .sort({ createdAt: - 1 })
    .limit(to - from)
    .skip(from);
  const objModels = models.map((model) => model.toObject());

  return objModels;
};

const updateItemById = async (itemId, itemData) => {
  const model = await ItemModel.findByIdAndUpdate(
    itemId, itemData,
    {
      new: true,
    }
  );
  return model.toObject();
};

const removeItemById = async (itemId) => {
  await ItemModel.deleteOne({ _id: itemId });
};

module.exports = {
  createItem,
  getItemById,
  getItemsList,
  updateItemById,
  removeItemById,
};
