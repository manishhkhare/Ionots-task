const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  projectId: { type: String, required: true },
  tasksCompleted: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model("Progress", ProgressSchema);
