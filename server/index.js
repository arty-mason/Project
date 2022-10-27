require("dotenv").config();

const functions = require("firebase-functions");
const express = require("express");
const connectDB = require("./config/connectDB");

const collectionRouter = require("./controllers/collectionsController");
const itemRouter = require("./controllers/itemController");

const app = express();

connectDB();

app.use("/collections", collectionRouter);
app.use("/items", itemRouter);

exports.app = functions.region("europe-central2").https.onRequest(app);
