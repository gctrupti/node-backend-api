const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const Task = require("../models/Task");

/* ============================
   CREATE TASK (POST /tasks)
============================ */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title } = req.body;

    const task = await Task.create({
      title,
      user: req.userId,
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ============================
   GET TASKS (GET /tasks)
============================ */
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
