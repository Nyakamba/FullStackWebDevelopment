//mimic authentication

const isAuthenticated = (req, res, next) => {
  const isLogin = false;
  if (isLogin) {
    next();
  } else {
    res.json({ message: "Unauthoorized" });
  }
};
module.exports = isAuthenticated;
