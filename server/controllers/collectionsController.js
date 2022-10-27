const express = require("express");
const router = express.Router();

const collectionService = require("../services/collectionsService");

router.post("/", async (req, res) => {
  const collectionBody = req.body;
  const result = await collectionService.createColection(collectionBody);
  res.send(result);
});

router.get("/last", async (req, res) => {
  const from = +req.query.from || 0;
  const to = +req.query.to || 10;
  const result = await collectionService.getCollectionsList(from, to);
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const collectionId = req.params.id;
  const result = await collectionService.getCollectionById(collectionId);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const collectionId = req.params.id;
  const collectionBody = req.body;
  const result = await collectionService.updateCollectionById(
    collectionId,
    collectionBody
  );
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const collectionId = req.params.id;
  await collectionService.removeCollectionById(collectionId);
  res.send({});
});

module.exports = router;
