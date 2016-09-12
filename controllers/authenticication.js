module.exports = {
  register: authenticationsRegister,
  login:    authenticationsLogin
};

const User   = require("..models/user");
const jwt    = require("jsonwebtoken");
const config = require("../config/config");

function authenticationsRegister(req, res){
  User.create(req.body.user, (err, user) => {
    if (err) return res.status(500).json({ message: "Something went wrong"});
    let token = jwt.sign(user._id, config.secrets, { expiresIn: 60*60*24 });

    return res.status(201).json({
      message: "Welcome back",
      user,
      token
    });
  });
}
