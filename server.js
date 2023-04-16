const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require("./routes/auth/auth"));
app.use(require("./routes/chat"));

app.listen(port, (req, res) => {
  console.log(`Server is running at http://localhost:${port}`);
});
