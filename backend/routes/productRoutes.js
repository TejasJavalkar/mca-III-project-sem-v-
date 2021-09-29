const express = require("express");
const { getProducts, getProduct } = require("../controller/productController");
const router = express.Router();

router.route("/products/").get(getProducts);
router.route("/products/:id").get(getProduct);

// router.get(
//   "/products/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.send(products);
//   })
// );

// router.get(
//   "/products/:id",
//   asyncHandler(async (req, res) => {
//     const products = await Product.findById(req.params.id);
//     if (products) {
//       res.send(products);
//     } else {
//       res.status(404).json({ message: "Item Not Found" });
//     }
//   })
// );

// router.get("/products/:id", (req, res) => {
//   //const product = products.find((p) => p._id === req.params.id);
//   res.send(product);
// });

module.exports = router;
