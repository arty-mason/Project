require("dotenv").config();

const functions = require("firebase-functions");
const express = require("express");
const connectDB = require("./config/connectDB");

const collectionRouter = require("./controllers/collectionsController");

const app = express();

connectDB();

app.use("/collections", collectionRouter);

exports.app = functions.region("europe-central2").https.onRequest(app);
