const jwt = require("jsonwebtoken");

//verify token
const verifyToken = (token) => {
  return jwt.verify(token, "anykey", (err, decoded) => {
    if (err) {
      return false;
    }
    //return the decoded
    return decoded;
  });
};
module.exports = verifyToken;
