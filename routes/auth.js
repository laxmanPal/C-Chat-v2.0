const router = require("express").Router();
const authController = require("../controllers/auth");

router.get("/login", (req, res) => {
  res.render("pages/login", { title: "Login" });
});

router.get("/registration", (req, res) => {
  res.render("pages/registration", { title: "Register" });
});

router.get("/forgot-password", (req, res) => {
  res.render("pages/forgotPassword", { title: "Forgot Password" });
});

router.post("/add-user", authController.addUser);

module.exports = router;
