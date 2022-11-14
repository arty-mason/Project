const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');

const collectionService = require("../services/collectionsService");

router.post("/",
  [
    check('name')
      .notEmpty()
      .isString()
      .isLength(3, 20)
      .withMessage("Collection name must be a string with a minimum of 3 and a maximum of 20 characters and cannot be empty"),
    check('description')
      .notEmpty()
      .isString()
      .isLength(5, 50)
      .withMessage("Collection description must be a string with a minimum of 5 and a maximum of 50 characters and cannot be empty"),
    check('type')
      .notEmpty()
      .isString()
      .isLength(3, 20)
      .withMessage("Collection type must be a string with 20 characters maximum and cannot be empty"),
    check('tags')
      .notEmpty()
      .isArray(1, 10)
      .withMessage("Collection tags must be an array of 5 and a maximum of 50 strings and cannot be empty"),
  ],

  async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    };
    const result = await collectionService.createColection(req.body);
    res.sendStatus(201).send(result);
    next();
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
