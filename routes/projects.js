const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Update project status
router.put("/:id", async (req, res) => {
  const { status } = req.body;
  const project = await Project.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(project);
});

module.exports = router;
