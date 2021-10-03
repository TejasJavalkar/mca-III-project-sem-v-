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

const getUserProfile = asyncHandler(async (req, res) => {
  {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("User Not Found");
    }
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  //const { firstName, lastName, email, password, contactno } = req.body;
  const user = await User.findById(req.user._id);
  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.contactno = req.body.contactno || user.contactno;
    const updateUser = await user.save();
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      contactno: user.contactno,
    });
  } else {
    res.status(404);
    throw new Error("User Not Available");
  }
});

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };
