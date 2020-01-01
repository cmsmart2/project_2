var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};
exports.signin = function(req, res) {
  res.render("signin");
};
exports.favorites = function(req, res) {
  res.render("favorites");
};
exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect("/");
  });
};
