const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("pages/chat");
});

module.exports = router;
