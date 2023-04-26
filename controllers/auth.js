const Users = require("../models/Users");

exports.addUser = (req, res) => {
  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
};
