const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.pid);
  if (product) {
    res.send(product);
  } else {
    res.status(404).json({ message: "Item Not Found" });
  }
});

const addProduct = asyncHandler(async (req, res) => {
  const {
    User,
    name,
    image,
    brand,
    category,
    description,
    rating,
    price,
    countInStock,
  } = req.body;
  console.log(req.body);
  const product = await Product.create({
    User,
    name,
    image,
    brand,
    category,
    description,
    rating,
    price,
    countInStock,
  });
  if (product) {
    res.status(200).json({
      User: product.User,
      name: product.name,
      image: product.image,
      brand: product.brand,
      category: product.category,
      description: product.description,
      price: product.price,
      countInStock: product.countInStock,
    });
  } else {
    res.status(401);
    throw new Error("Something Is Missing");
  }
});

const searchProduct = asyncHandler(async (req, res) => {
  var regex = new RegExp(req.params.name, "i");
  const products = await Product.find({});
  const finds = await Product.find({ name: regex });
  if (finds) {
    res.json(finds);
  } else {
    res.send("Product Not Available");
  }
});

module.exports = { getProducts, getProduct, addProduct, searchProduct };
