const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");


// register user
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body;
  const exists = await User.findOne({ email });
  if (exists) {
    res.status(400);
    throw new Error("User Already Exists!");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    isAdmin,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastname: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Created");
  }
});

// login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists && (await exists.matchPassword(password))) {
    res.status(201).json({
      _id: exists._id,
      firstName: exists.firstName,
      lastname: exists.lastName,
      email: exists.email,
      isAdmin: exists.isAdmin,
      token: generateToken(exists._id),
    });
  } else {
    res.status(404);
    throw new Error("Incorrect Email Or Password");
  }
});

module.exports = { registerUser, loginUser };
