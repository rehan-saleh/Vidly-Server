const config = require("../config/config.json");

module.exports = function(req, res, next) {
  // 401 Unauthorized
  // 403 Forbidden
  if (!config.requiresAuth) return next();

  if (!req.user.isAdmin) return res.status(403).send("Access denied.");

  next();
};
