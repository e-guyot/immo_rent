const express = require("express");
const mongoose = require("mongoose");

const createRoutes = require("./routes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/immo");

createRoutes(app);

app.listen(3000, () => {
  console.log("Server is working");
});
