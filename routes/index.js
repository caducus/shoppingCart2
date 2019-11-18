/* Dependencies */
var express = require('express');
var router = express.Router();
var csrf = require("csurf");

var Product = require("../models/product.js");

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get("/", function(req, res, next) {
  Product.find(function(error, items) {
    var productChunk = [];
    var chunkSize = 3;
    for (var i = 0; i < items.length; i += chunkSize) {
      productChunk.push(items.slice(i, i + chunkSize));
    };
    res.render("shop/index", { title: "Shopping Cart", products: productChunk });
  });
});

/* User Signup */
router.get("/user/signup", function(req, res, next) {
  res.render("user/signup", {csrfToken: req.csrfToken()});
});

router.post("/user/signup", function(req, res, next) {
  res.redirect("/");
});

/* Export */
module.exports = router;
