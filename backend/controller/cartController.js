const Cart = require("../models/cartModal");
const asyncHandler = require("express-async-handler");

const getCartItem = asyncHandler(async (req, res) => {
  const cart = await Cart.find({});
  if (cart) {
    res.json(cart);
  } else {
    res.status(500);
    throw new Error("Product Not Added into cart");
  }
});

const addtoCart = asyncHandler(async (req, res) => {
  const { product, purchasePrice, totalPrice, imageUrl, user, quantity } =
    req.body;
  const cartItem = await Cart.create({
    product,
    user,
    purchasePrice,
    totalPrice,
    imageUrl,
    quantity,
  });
  if (cartItem) {
    res.status(200).json({
      product: cartItem.product,
      name: cartItem.product_name,
      user: cartItem.user,
      purchasePrice: cartItem.purchasePrice,
      totalPrice: cartItem.totalPrice,
      imageUrl: cartItem.imageUrl,
      quantity: cartItem.quantity,
    });
  } else {
    res.status(401);
    throw new Error("No Item Found");
  }
});

module.exports = { getCartItem, addtoCart };
