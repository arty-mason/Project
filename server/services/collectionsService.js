const CollectionModel = require("../model/Collection");

const createColection = async (colectionData) => {
  const model = new CollectionModel(colectionData);
  await model.save();
  return model.toObject();
};

const getCollectionById = async (collectionId) => {
  const model = await CollectionModel.findOne({ _id: collectionId });
  return model.toObject();
};

const getCollectionsList = async (from, to) => {
  const models = await CollectionModel.find({})
    .sort({ createdAt: -1 })
    .limit(to - from)
    .skip(from);
  const objModels = models.map((model) => model.toObject());

  return objModels;
};

const updateCollectionById = async (collectionId, collectionData) => {
  const model = await CollectionModel.findByIdAndUpdate(
    collectionId,
    collectionData,
    {
      new: true,
    }
  );
  return model.toObject();
};

const removeCollectionById = async (collectionId) => {
  await CollectionModel.deleteOne({ _id: collectionId });
};

module.exports = {
  createColection,
  getCollectionById,
  getCollectionsList,
  updateCollectionById,
  removeCollectionById,
};
