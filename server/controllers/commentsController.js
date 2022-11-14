const express = require("express");
const router = express.Router();

const {
  createComment,
  getCommentByid,
  getCommentList,
  removeCommentById
} = require("../services/commentsService");

router.get("/last", async (req, res) => {
  const from = +req.query.from || 0;
  const to = +req.query.to || 10;
  const result = await getCommentList(from, to);
  res.send(result);
});

router.post("/", async (req, res) => {
  const commentBody = req.body;
  const result = await createComment(commentBody);
  res.send(result);
});


router.get("/:id", async (req, res) => {
  const commentId = req.params.id;
  const result = await getCommentByid(commentId);
  res.send(result);
});


router.delete("/:id", async (req, res) => {
  const commentId = req.params.id;
  await removeCommentById(commentId);
  res.send({});
});

module.exports = router;
