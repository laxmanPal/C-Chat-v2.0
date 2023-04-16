const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("pages/login", { title: "Login" });
});

router.get("/registration", (req, res) => {
  res.render("pages/registration", { title: "Register" });
});

router.get("/forgot-password", (req, res) => {
  res.render("pages/forgotPassword", { title: "Forgot Password" });
});

module.exports = router;
