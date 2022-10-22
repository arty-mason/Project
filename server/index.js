const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  console.log("Hello, world!");
  res.send({
    now: new Date().getTime(),
  });
});

exports.app = functions.region("europe-central2").https.onRequest(app);
