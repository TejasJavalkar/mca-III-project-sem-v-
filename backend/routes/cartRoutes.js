const express = require("express");
const { getCartItem, addtoCart } = require("../controller/cartController");

const router = express.Router();
router.route("/usercart").get(getCartItem);
router.route("/add").post(addtoCart);

module.exports = router;
