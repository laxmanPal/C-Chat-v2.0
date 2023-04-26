const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require("./routes/auth"));
app.use(require("./routes/chat"));

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cchat.cgqscui.mongodb.net/${process.env.DB_NAME}`
//   )
//   .then(() => {
//     console.log("MongoDB Connected");
//     app.listen(port, (req, res) => {
//       console.log(`Server is running at http://localhost:${port}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

app.listen(port, (req, res) => {
  console.log(`Server is running at http://localhost:${port}`);
});
