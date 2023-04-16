const router = require("express").Router();

router.get("/chat", (req, res) => {
  res.render("pages/chat");
});

module.exports = router;
