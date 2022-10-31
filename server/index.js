require("dotenv").config();

const functions = require("firebase-functions");
const express = require("express");
const connectDB = require("./config/connectDB");
const cors = require('cors');

const collectionRouter = require("./controllers/collectionsController");
const itemRouter = require("./controllers/itemController");
const commentsRouter = require("./controllers/commentsController");

const app = express();


connectDB();

app.use(cors());
app.use("/collections", collectionRouter);
app.use("/items", itemRouter);
app.use("/comments", commentsRouter);

exports.app = functions.region("europe-central2").https.onRequest(app);
