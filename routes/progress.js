const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// Post progress update
router.post("/", async (req, res) => {
  const { userId, projectId, tasksCompleted, score } = req.body;

  const progress = new Progress({ userId, projectId, tasksCompleted, score });
  await progress.save();
  res.json(progress);
});

// Get progress
router.get("/:userId", async (req, res) => {
  const progress = await Progress.find({ userId: req.params.userId });
  res.json(progress);
});

module.exports = router;
