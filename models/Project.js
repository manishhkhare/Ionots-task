const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  assignedTo: { type: String }, // User ID
  status: { type: String, enum: ["Pending", "Accepted", "Completed"], default: "Pending" },
});

module.exports = mongoose.model("Project", ProjectSchema);
