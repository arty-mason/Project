const express = require("express");
const router = express.Router();

const {
  createItem,
  getItemById,
  getItemsList,
  updateItemById,
  removeItemById,
} = require("../services/itemService");

router.get("/last", async (req, res) => {
  const from = +req.query.from || 0;
  const to = +req.query.to || 10;
  const result = await getItemsList(from, to);
  res.send(result);
});

router.post("/", async (req, res) => {
  const itemBody = req.body;
  const result = await createItem(itemBody);
  res.send(result);
});


router.get("/:id", async (req, res) => {
  const itemId = req.params.id;
  const result = await getItemById(itemId);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const itemId = req.params.id;
  const itemBody = req.body;
  const result = await updateItemById(
    itemId,
    itemBody
  );
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const itemId = req.params.id;
  await removeItemById(itemId);
  res.send({});
});

module.exports = router;
