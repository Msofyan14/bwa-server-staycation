var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.touch();
  res.redirect("/admin/signin");
});

module.exports = router;
