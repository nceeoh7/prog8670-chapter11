const User = require("../models/User");
const path = require("path");

module.exports = async (req, res) => {
  try {
    let user = await User.create(req.body);
  } catch (error) {
    console.log(error);
    res.redirect("/auth/register");
  }

  res.redirect("/");
};
