const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://bz_ey:eyu@2022@e-commerce.u5e1ts9.mongodb.net/")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Error ocurred"));

app.get("/", (req, res) => {
  res.send("Express app is running");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("product"), (req, res) => {});

app.listen(port, (err) => {
  if (!err) {
    console.log("Server running on port 4000");
  } else {
    console.log("Error occurred");
  }
});
