const CommentModel = require("../model/Comment");

const createComment = async (commentData) => {
  const model = new CommentModel(commentData);
  await model.save();
  return model.toObject();
};

const getCommentByid = async (commentId) => {
  const model = await CommentModel.findOne({ _id: commentId });
  return model.toObject();
};

const getCommentList = async (from, to) => {
  const models = await CommentModel.find({})
    .sort({ createdAt: 1 })
    .limit(to - from)
    .skip(from);
  const objModels = models.map((model) => model.toObject());

  return objModels;
};

const removeCommentById = async (commentId) => {
  await CommentModel.deleteOne({ _id: commentId });
};

module.exports = {
  createComment,
  getCommentByid,
  getCommentList,
  removeCommentById
};
