const getTokenFromHeaders = require("../utils/getTokenFromHeaders");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  //1.get the token from header
  const token = getTokenFromHeaders(req);
  //2.Verify the token
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.json({ message: "Invalid/expired token, please login again" });
  }

  //3.Save the user into the req obj
  next();
};

module.exports = isLogin;
