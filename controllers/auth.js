const Users = require("../models/Users");

exports.addUser = async (req, res) => {
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const newUser = await user.save();

  console.log(newUser);

  res.redirect("/");
};
