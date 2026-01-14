const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET /users → fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /users → create user
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: "Name and email are required",
      });
    }

    const user = new User({ name, email });
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }

    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
